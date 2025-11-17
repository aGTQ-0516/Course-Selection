const authConfig = window.supabaseConfig || {};
const AUTH_SUPABASE_URL = authConfig.url;
const AUTH_SUPABASE_ANON_KEY = authConfig.anonKey;

const authClient =
  AUTH_SUPABASE_URL && AUTH_SUPABASE_ANON_KEY
    ? window.supabase.createClient(AUTH_SUPABASE_URL, AUTH_SUPABASE_ANON_KEY)
    : null;

const authEls = {
  statusText: document.getElementById("status-text"),
  signUpForm: document.getElementById("sign-up-form"),
  signInForm: document.getElementById("sign-in-form")
};

function authUpdateStatus(message) {
  if (authEls.statusText) {
    authEls.statusText.textContent = message;
  }
}

function assertAuthClient() {
  if (!authClient) {
    throw new Error("Supabase Auth 客户端未配置。");
  }
}

async function authInit() {
  try {
    assertAuthClient();
    bindAuthEvents();
    await restoreAuthSession();
  } catch (err) {
    console.error(err);
    authUpdateStatus("⚠️ Supabase 配置缺失，请检查 assets/config.js");
  }
}

function bindAuthEvents() {
  if (authEls.signUpForm) {
    authEls.signUpForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      await signUp({
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        password: formData.get("password")
      });
    });
  }

  if (authEls.signInForm) {
    authEls.signInForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      await signIn({
        email: formData.get("email"),
        password: formData.get("password")
      });
    });
  }
}

async function restoreAuthSession() {
  const { data } = await authClient.auth.getSession();
  const session = data?.session ?? null;
  if (session) {
    authUpdateStatus(`已登录：${session.user.email}，正在跳转到选课页面...`);
    window.location.href = "index.html";
  }
}

async function signUp({ fullName, email, password }) {
  authUpdateStatus("正在注册...");
  const { data, error } = await authClient.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } }
  });

  if (error) {
    authUpdateStatus(`注册失败：${error.message}`);
    return;
  }

  const userId = data.user?.id;
  if (userId) {
    await authClient.from("students").upsert({
      id: userId,
      full_name: fullName,
      email
    });
  }

  authUpdateStatus("注册成功，请前往邮箱验证后在右侧登录。");
  authEls.signUpForm.reset();
}

async function signIn({ email, password }) {
  authUpdateStatus("正在登录...");
  const { error } = await authClient.auth.signInWithPassword({ email, password });
  if (error) {
    authUpdateStatus(`登录失败：${error.message}`);
    return;
  }

  authUpdateStatus("登录成功，正在跳转到选课页面...");
  window.location.href = "index.html";
}

authInit();


