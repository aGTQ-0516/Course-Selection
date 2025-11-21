// 模拟课程数据
const coursesData = [
    {
        id: 1,
        title: "Web前端开发基础",
        instructor: "张教授",
        category: "computer",
        categoryText: "计算机科学",
        time: "morning",
        timeText: "周一、三 8:00-9:30",
        credits: 3,
        students: 45,
        rating: 4.8,
        description: "本课程介绍Web前端开发的基础知识，包括HTML、CSS和JavaScript的基本概念和应用。学生将学习如何创建静态网页，使用CSS美化页面，以及使用JavaScript添加交互功能。",
        icon: "fa-html5"
    },
    {
        id: 2,
        title: "数据结构与算法",
        instructor: "李教授",
        category: "computer",
        categoryText: "计算机科学",
        time: "afternoon",
        timeText: "周二、四 14:00-15:30",
        credits: 4,
        students: 60,
        rating: 4.7,
        description: "本课程系统地介绍计算机科学中的基本数据结构和算法。内容包括线性表、栈和队列、树和图等基本数据结构，以及排序、查找、图算法等经典算法。",
        icon: "fa-code"
    },
    {
        id: 3,
        title: "高等数学",
        instructor: "王教授",
        category: "mathematics",
        categoryText: "数学",
        time: "morning",
        timeText: "周一、三、五 10:00-11:30",
        credits: 4,
        students: 120,
        rating: 4.5,
        description: "本课程主要内容包括极限与连续、导数与微分、中值定理及导数的应用、不定积分、定积分及其应用等。通过本课程的学习，学生能够掌握微积分的基本概念、理论和计算方法。",
        icon: "fa-calculator"
    },
    {
        id: 4,
        title: "大学物理",
        instructor: "赵教授",
        category: "physics",
        categoryText: "物理",
        time: "afternoon",
        timeText: "周二、四 16:00-17:30",
        credits: 3,
        students: 80,
        rating: 4.6,
        description: "本课程主要介绍力学、热学、电磁学、光学和近代物理等方面的基本概念和规律。通过理论学习与实验操作相结合的方式，培养学生的科学思维和实验技能。",
        icon: "fa-atom"
    },
    {
        id: 5,
        title: "有机化学",
        instructor: "陈教授",
        category: "chemistry",
        categoryText: "化学",
        time: "morning",
        timeText: "周一、三 8:00-9:30",
        credits: 3,
        students: 50,
        rating: 4.4,
        description: "本课程系统地介绍有机化合物的结构、命名、性质、反应机理和合成方法。内容包括烷烃、烯烃、芳香烃、醇、酚、醚、醛、酮、羧酸及其衍生物等。",
        icon: "fa-flask"
    },
    {
        id: 6,
        title: "分子生物学",
        instructor: "刘教授",
        category: "biology",
        categoryText: "生物学",
        time: "afternoon",
        timeText: "周二、四 14:00-15:30",
        credits: 3,
        students: 40,
        rating: 4.7,
        description: "本课程主要介绍DNA、RNA和蛋白质的结构与功能，基因表达调控，分子克隆技术，基因组学，蛋白质组学等内容。通过理论学习与实践操作相结合的方式，使学生掌握现代分子生物学的基本原理和实验技术。",
        icon: "fa-dna"
    },
    {
        id: 7,
        title: "微观经济学",
        instructor: "孙教授",
        category: "economics",
        categoryText: "经济学",
        time: "evening",
        timeText: "周一、三 19:00-20:30",
        credits: 3,
        students: 90,
        rating: 4.6,
        description: "本课程主要介绍微观经济学的基本原理，包括供求理论、消费者行为理论、生产者行为理论、市场结构理论、市场失灵与政府干预等。通过本课程的学习，学生能够理解市场经济运行的基本规律。",
        icon: "fa-chart-line"
    },
    {
        id: 8,
        title: "中国现代文学",
        instructor: "周教授",
        category: "literature",
        categoryText: "文学",
        time: "evening",
        timeText: "周二、四 19:00-20:30",
        credits: 2,
        students: 55,
        rating: 4.8,
        description: "本课程主要介绍1919年五四运动以来的中国现代文学发展历程，重点讲授鲁迅、茅盾、巴金、老舍、曹禺等代表性作家的作品，分析其思想内容与艺术特色，探讨中国现代文学的精神特质与艺术追求。",
        icon: "fa-book"
    },
    {
        id: 9,
        title: "世界近代史",
        instructor: "吴教授",
        category: "history",
        categoryText: "历史学",
        time: "morning",
        timeText: "周二、四 10:00-11:30",
        credits: 2,
        students: 65,
        rating: 4.5,
        description: "本课程主要介绍15世纪末地理大发现至20世纪初的世界历史发展进程，内容包括资本主义的兴起、资产阶级革命、工业革命、殖民扩张、民族解放运动等，探讨近代世界历史发展的基本规律和特点。",
        icon: "fa-globe"
    },
    {
        id: 10,
        title: "机器学习基础",
        instructor: "郑教授",
        category: "computer",
        categoryText: "计算机科学",
        time: "evening",
        timeText: "周一、三 19:00-20:30",
        credits: 3,
        students: 70,
        rating: 4.9,
        description: "本课程介绍机器学习的基本概念、原理和算法。内容包括监督学习、无监督学习、强化学习等主要方法，以及线性回归、逻辑回归、决策树、支持向量机、神经网络等常用算法。通过理论学习和编程实践，使学生掌握机器学习的基本原理和应用方法。",
        icon: "fa-robot"
    },
    {
        id: 11,
        title: "线性代数",
        instructor: "黄教授",
        category: "mathematics",
        categoryText: "数学",
        time: "afternoon",
        timeText: "周二、四 14:00-15:30",
        credits: 3,
        students: 85,
        rating: 4.4,
        description: "本课程主要介绍行列式、矩阵、线性方程组、向量空间、线性变换、特征值和特征向量、二次型等内容。通过本课程的学习，学生能够掌握线性代数的基本理论和计算方法，为后续课程学习奠定基础。",
        icon: "fa-th"
    },
    {
        id: 12,
        title: "量子力学",
        instructor: "杨教授",
        category: "physics",
        categoryText: "物理",
        time: "evening",
        timeText: "周一、三 19:00-20:30",
        credits: 3,
        students: 35,
        rating: 4.7,
        description: "本课程主要介绍量子力学的基本概念、基本原理和数学形式，包括波函数和薛定谔方程、力学量的算符表示、表象理论、微扰理论、自旋和全同粒子等内容。通过本课程的学习，学生能够理解量子力学的基本原理和应用。",
        icon: "fa-rocket"
    }
];

// 全局变量
let selectedCourses = [];
let filteredCourses = [...coursesData];

// DOM元素
const courseList = document.getElementById('course-list');
const myCourseList = document.getElementById('my-course-list');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryFilter = document.getElementById('category-filter');
const timeFilter = document.getElementById('time-filter');
const creditFilter = document.getElementById('credit-filter');
const courseModal = document.getElementById('course-modal');
const courseDetail = document.getElementById('course-detail');
const closeModal = document.querySelector('.close');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notification-text');
const totalCourses = document.getElementById('total-courses');
const totalCredits = document.getElementById('total-credits');
const emptyState = document.getElementById('empty-state');
const browseCoursesBtn = document.getElementById('browse-courses');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderCourses(coursesData);
    updateMyCourses();
    initEventListeners();
    
    // 从本地存储加载已选课程
    loadSelectedCourses();
});

// 事件监听器
function initEventListeners() {
    // 导航切换
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            switchPage(targetPage);
            
            // 更新导航活动状态
            document.querySelectorAll('.nav-link').forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // 搜索和筛选
    searchBtn.addEventListener('click', filterCourses);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            filterCourses();
        }
    });
    
    categoryFilter.addEventListener('change', filterCourses);
    timeFilter.addEventListener('change', filterCourses);
    creditFilter.addEventListener('change', filterCourses);
    
    // 模态框关闭
    closeModal.addEventListener('click', function() {
        courseModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === courseModal) {
            courseModal.style.display = 'none';
        }
    });
    
    // 浏览课程按钮
    browseCoursesBtn.addEventListener('click', function() {
        switchPage('courses');
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('active');
        });
        document.querySelector('[data-page="courses"]').classList.add('active');
    });
}

// 页面切换
function switchPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`${pageName}-page`).classList.add('active');
}

// 渲染课程列表
function renderCourses(courses) {
    courseList.innerHTML = '';
    
    if (courses.length === 0) {
        courseList.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fas fa-search"></i>
                <p>没有找到符合条件的课程</p>
            </div>
        `;
        return;
    }
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        
        const isSelected = selectedCourses.some(c => c.id === course.id);
        
        courseCard.innerHTML = `
            <div class="course-image">
                <i class="fas ${course.icon}"></i>
                <span class="course-badge">${course.categoryText}</span>
            </div>
            <div class="course-info">
                <h3 class="course-title">${course.title}</h3>
                <div class="course-instructor">
                    <i class="fas fa-user-tie"></i>
                    <span>${course.instructor}</span>
                </div>
                <div class="course-meta">
                    <span><i class="fas fa-clock"></i> ${course.timeText}</span>
                    <span><i class="fas fa-star"></i> ${course.rating}</span>
                </div>
                <div class="course-meta">
                    <span><i class="fas fa-users"></i> ${course.students}人</span>
                    <span><i class="fas fa-graduation-cap"></i> ${course.credits}学分</span>
                </div>
                <div class="course-actions">
                    <button class="btn-outline details-btn" data-id="${course.id}">详情</button>
                    <button class="btn primary select-btn ${isSelected ? 'selected' : ''}" data-id="${course.id}">
                        ${isSelected ? '已选' : '选课'}
                    </button>
                </div>
            </div>
        `;
        
        courseList.appendChild(courseCard);
    });
    
    // 添加课程详情按钮事件
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const courseId = parseInt(this.getAttribute('data-id'));
            showCourseDetail(courseId);
        });
    });
    
    // 添加选课按钮事件
    document.querySelectorAll('.select-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const courseId = parseInt(this.getAttribute('data-id'));
            toggleCourseSelection(courseId);
        });
    });
}

// 搜索和筛选课程
function filterCourses() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const time = timeFilter.value;
    const credit = creditFilter.value;
    
    filteredCourses = coursesData.filter(course => {
        // 搜索筛选
        const matchesSearch = course.title.toLowerCase().includes(searchTerm) || 
                             course.instructor.toLowerCase().includes(searchTerm);
        
        // 分类筛选
        const matchesCategory = !category || course.category === category;
        
        // 时间筛选
        const matchesTime = !time || course.time === time;
        
        // 学分筛选
        let matchesCredit = true;
        if (credit === '4') {
            matchesCredit = course.credits >= 4;
        } else if (credit) {
            matchesCredit = course.credits === parseInt(credit);
        }
        
        return matchesSearch && matchesCategory && matchesTime && matchesCredit;
    });
    
    renderCourses(filteredCourses);
}

// 显示课程详情
function showCourseDetail(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;
    
    const isSelected = selectedCourses.some(c => c.id === course.id);
    
    courseDetail.innerHTML = `
        <div class="course-detail-header">
            <div class="course-detail-image">
                <i class="fas ${course.icon}"></i>
            </div>
            <div class="course-detail-info">
                <h2 class="course-detail-title">${course.title}</h2>
                <div class="course-detail-instructor">
                    <i class="fas fa-user-tie"></i>
                    <span>${course.instructor}</span>
                </div>
                <div class="course-detail-meta">
                    <div class="course-detail-meta-item">
                        <i class="fas fa-tag"></i>
                        <span>${course.categoryText}</span>
                    </div>
                    <div class="course-detail-meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${course.timeText}</span>
                    </div>
                    <div class="course-detail-meta-item">
                        <i class="fas fa-graduation-cap"></i>
                        <span>${course.credits}学分</span>
                    </div>
                    <div class="course-detail-meta-item">
                        <i class="fas fa-users"></i>
                        <span>${course.students}人已选</span>
                    </div>
                    <div class="course-detail-meta-item">
                        <i class="fas fa-star"></i>
                        <span>${course.rating}分</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="course-detail-description">
            <h3>课程介绍</h3>
            <p>${course.description}</p>
        </div>
        <div class="course-detail-actions">
            <button class="btn secondary" onclick="document.getElementById('course-modal').style.display='none'">关闭</button>
            <button class="btn primary ${isSelected ? 'selected' : ''}" onclick="toggleCourseSelection(${course.id})">
                ${isSelected ? '已选' : '选课'}
            </button>
        </div>
    `;
    
    courseModal.style.display = 'block';
}

// 切换课程选择状态
function toggleCourseSelection(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;
    
    const index = selectedCourses.findIndex(c => c.id === courseId);
    
    if (index === -1) {
        // 添加课程
        selectedCourses.push(course);
        showNotification(`成功选择课程: ${course.title}`);
    } else {
        // 移除课程
        selectedCourses.splice(index, 1);
        showNotification(`已取消选择: ${course.title}`);
    }
    
    // 更新UI
    updateMyCourses();
    
    // 如果当前在课程列表页，更新按钮状态
    if (document.getElementById('courses-page').classList.contains('active')) {
        renderCourses(filteredCourses);
    }
    
    // 如果模态框打开，更新模态框中的按钮状态
    if (courseModal.style.display === 'block') {
        showCourseDetail(courseId);
    }
    
    // 保存到本地存储
    saveSelectedCourses();
}

// 更新我的选课页面
function updateMyCourses() {
    // 更新统计信息
    totalCourses.textContent = selectedCourses.length;
    totalCredits.textContent = selectedCourses.reduce((sum, course) => sum + course.credits, 0);
    
    // 更新课程列表
    myCourseList.innerHTML = '';
    
    if (selectedCourses.length === 0) {
        emptyState.style.display = 'block';
        myCourseList.style.display = 'none';
    } else {
        emptyState.style.display = 'none';
        myCourseList.style.display = 'grid';
        
        selectedCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            
            courseCard.innerHTML = `
                <div class="course-image">
                    <i class="fas ${course.icon}"></i>
                    <span class="course-badge">${course.categoryText}</span>
                </div>
                <div class="course-info">
                    <h3 class="course-title">${course.title}</h3>
                    <div class="course-instructor">
                        <i class="fas fa-user-tie"></i>
                        <span>${course.instructor}</span>
                    </div>
                    <div class="course-meta">
                        <span><i class="fas fa-clock"></i> ${course.timeText}</span>
                        <span><i class="fas fa-star"></i> ${course.rating}</span>
                    </div>
                    <div class="course-meta">
                        <span><i class="fas fa-graduation-cap"></i> ${course.credits}学分</span>
                    </div>
                    <div class="course-actions">
                        <button class="btn-outline details-btn" data-id="${course.id}">详情</button>
                        <button class="btn secondary remove-btn" data-id="${course.id}">退选</button>
                    </div>
                </div>
            `;
            
            myCourseList.appendChild(courseCard);
        });
        
        // 添加事件监听器
        document.querySelectorAll('#my-courses-page .details-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const courseId = parseInt(this.getAttribute('data-id'));
                showCourseDetail(courseId);
            });
        });
        
        document.querySelectorAll('#my-courses-page .remove-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const courseId = parseInt(this.getAttribute('data-id'));
                toggleCourseSelection(courseId);
            });
        });
    }
}

// 显示通知
function showNotification(message) {
    notificationText.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// 保存选课状态到本地存储
function saveSelectedCourses() {
    const courseIds = selectedCourses.map(course => course.id);
    localStorage.setItem('selectedCourses', JSON.stringify(courseIds));
}

// 从本地存储加载选课状态
function loadSelectedCourses() {
    const savedCourses = localStorage.getItem('selectedCourses');
    if (savedCourses) {
        const courseIds = JSON.parse(savedCourses);
        selectedCourses = courseIds.map(id => coursesData.find(course => course.id === id)).filter(Boolean);
        updateMyCourses();
        
        // 如果当前在课程列表页，更新按钮状态
        if (document.getElementById('courses-page').classList.contains('active')) {
            renderCourses(filteredCourses);
        }
    }
}