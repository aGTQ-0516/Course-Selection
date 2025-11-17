const config = window.supabaseConfig || {};
const SUPABASE_URL = config.url;
const SUPABASE_ANON_KEY = config.anonKey;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn("请在 assets/config.js 中配置 Supabase URL 与 anon key。");
}

const supabase = SUPABASE_URL && SUPABASE_ANON_KEY
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

const state = {
  session: null,
  courses: [],
  enrollments: [],
  activeView: "courses"
};

const els = {
  statusText: document.getElementById("status-text"),
  signOutBtn: document.getElementById("sign-out-btn"),
  courseSection: document.getElementById("course-section"),
  enrollmentSection: document.getElementById("enrollment-section"),
  courseList: document.getElementById("course-list"),
  enrollmentList: document.getElementById("enrollment-list"),
  courseSearch: document.getElementById("course-search"),
  creditFilter: document.getElementById("credit-filter"),
  viewToggles: document.querySelectorAll("[data-view]")
};

function assertClient() {
  if (!supabase) {
    throw new Error("Supabase 客户端未配置。");
  }
}

async function init() {
  try {
    assertClient();
    bindEvents();
    await restoreSession();
  } catch (err) {
    console.error(err);
    updateStatus("⚠️ Supabase 配置缺失，请检查 assets/config.js");
  }
}

function bindEvents() {
  els.signOutBtn.addEventListener("click", async () => {
    await supabase.auth.signOut();
    state.session = null;
    state.enrollments = [];
    render();
  });

  els.courseSearch.addEventListener("input", renderCourseList);
  els.creditFilter.addEventListener("change", renderCourseList);

  els.viewToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.dataset.view;
      setActiveView(view);
    });
  });
}

async function restoreSession() {
  const { data } = await supabase.auth.getSession();
  state.session = data?.session ?? null;

  if (!state.session) {
    // 未登录则跳转到登录页面
    window.location.href = "login.html";
    return;
  }

  supabase.auth.onAuthStateChange((_event, session) => {
    state.session = session;
    if (!session) {
      window.location.href = "login.html";
      return;
    }
    refreshData();
  });

  // 已登录则加载数据
  await refreshData();
}

async function refreshData() {
  render();
  if (!state.session) return;

  updateStatus("正在加载课程数据...");
  const [courses, enrollments] = await Promise.all([fetchCourses(), fetchEnrollments()]);
  state.courses = courses ?? [];
  state.enrollments = enrollments ?? [];
  render();
  updateStatus("数据已同步。");
}

async function fetchCourses() {
  const { data, error } = await supabase.from("courses").select("*").order("code");
  if (error) {
    updateStatus(`加载课程失败：${error.message}`);
  }
  return data;
}

async function fetchEnrollments() {
  const studentId = state.session?.user?.id;
  if (!studentId) return [];
  const { data, error } = await supabase
    .from("enrollments")
    .select("id, course_id, courses ( code, name, teacher, credit, schedule )")
    .eq("student_id", studentId);
  if (error) {
    updateStatus(`加载选课记录失败：${error.message}`);
  }
  return data;
}

function render() {
  const isLogin = Boolean(state.session);
  els.signOutBtn.hidden = !isLogin;
  els.statusText.textContent = isLogin ? `已登录：${state.session.user.email}` : "未登录";

  if (isLogin) {
    updateViewVisibility();
    renderCourseList();
    renderEnrollmentList();
  } else {
    els.courseList.innerHTML = "";
    els.enrollmentList.innerHTML = "";
    els.courseSection.hidden = true;
    els.enrollmentSection.hidden = true;
  }
}

function setActiveView(view) {
  if (!view || view === state.activeView) return;
  state.activeView = view;
  updateViewVisibility();
}

function updateViewVisibility() {
  if (!state.session) return;
  const showCourses = state.activeView === "courses";
  els.courseSection.hidden = !showCourses;
  els.enrollmentSection.hidden = showCourses ? true : false;

  els.viewToggles.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === state.activeView);
  });
}

function renderCourseList() {
  const keyword = els.courseSearch.value?.toLowerCase() ?? "";
  const credit = els.creditFilter.value;
  const enrolledIds = new Set(state.enrollments.map((item) => item.course_id));

  const filtered = state.courses.filter((course) => {
    const matchesKeyword =
      course.name.toLowerCase().includes(keyword) ||
      course.teacher.toLowerCase().includes(keyword) ||
      course.code.toLowerCase().includes(keyword);
    const matchesCredit = credit === "all" || Number(course.credit) === Number(credit);
    return matchesKeyword && matchesCredit;
  });

  els.courseList.innerHTML = "";
  if (!filtered.length) {
    els.courseList.innerHTML = `<p class="tip">暂无匹配的课程。</p>`;
    return;
  }

  filtered.forEach((course) => {
    const card = document.createElement("article");
    card.className = "course-card";
    card.innerHTML = `
      <div class="course-card__meta">
        <span class="badge">${course.code}</span>
        <span>${course.credit} 学分</span>
      </div>
      <h3>${course.name}</h3>
      <p>授课教师：${course.teacher}</p>
      <p>上课时间：${course.schedule || "待定"}</p>
    `;

    const actions = document.createElement("div");
    actions.className = "course-card__actions";

    const btn = document.createElement("button");
    btn.textContent = enrolledIds.has(course.id) ? "退课" : "选课";
    btn.classList.toggle("secondary", enrolledIds.has(course.id));
    btn.addEventListener("click", () => toggleEnrollment(course, enrolledIds.has(course.id)));

    actions.appendChild(btn);
    card.appendChild(actions);
    els.courseList.appendChild(card);
  });
}

function renderEnrollmentList() {
  els.enrollmentList.innerHTML = "";
  if (!state.enrollments.length) {
    els.enrollmentList.innerHTML = `<li class="tip">尚未选择任何课程。</li>`;
    return;
  }

  state.enrollments.forEach((record) => {
    const course = record.courses;
    const item = document.createElement("li");
    item.className = "enrollment-item";
    item.innerHTML = `
      <div>
        <strong>${course?.name ?? "未知课程"}</strong>
        <p>${course?.code ?? ""} · ${course?.teacher ?? ""}</p>
      </div>
      <button class="secondary" data-id="${record.course_id}">退课</button>
    `;

    item.querySelector("button").addEventListener("click", () => toggleEnrollment(course, true));
    els.enrollmentList.appendChild(item);
  });
}

async function toggleEnrollment(course, enrolled) {
  if (!course?.id) return;
  const studentId = state.session?.user?.id;
  if (!studentId) return;

  updateStatus(enrolled ? "正在退课..." : "正在选课...");

  if (enrolled) {
    const { error } = await supabase
      .from("enrollments")
      .delete()
      .match({ student_id: studentId, course_id: course.id });
    if (error) {
      updateStatus(`退课失败：${error.message}`);
      return;
    }
  } else {
    const { error } = await supabase.from("enrollments").insert({
      student_id: studentId,
      course_id: course.id
    });
    if (error) {
      updateStatus(`选课失败：${error.message}`);
      return;
    }
  }

  await refreshData();
}

function updateStatus(message) {
  els.statusText.textContent = message;
}

init();

