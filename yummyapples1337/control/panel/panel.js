// ========== ПАРОЛЬ (жестко зашит) ==========
const ADMIN_PASSWORD = "TrashAdmin666";

// ========== ОПРЕДЕЛЕНИЕ ЯЗЫКА ИНТЕРФЕЙСА АДМИНКИ ==========
const urlParams = new URLSearchParams(window.location.search);
let adminLang = urlParams.get('hl') === 'en' ? 'en' : 'ru';
localStorage.setItem('adminLang', adminLang);

// Тексты интерфейса
const i18n = {
    ru: {
        loginTitle: "🔐 Вход в админку",
        passwordPlaceholder: "Пароль",
        loginBtn: "Войти",
        wrongPassword: "Неверный пароль!",
        resetRating: "🏆 Сбросить рейтинг",
        resetDisgust: "🤢 Сбросить счётчики мерзости",
        clearLogs: "📋 Очистить лог",
        logout: "🚪 Выйти",
        topFactsTitle: "💩 Топ факты (topFacts)",
        addFact: "+ Добавить факт",
        saveFacts: "💾 Сохранить факты",
        confessionsTitle: "🗣 Исповеди (confessions)",
        adminLogsTitle: "📜 Лог действий админа",
        delete: "Удалить",
        confirmDelete: "Точно удалить?",
        confirmResetRating: "Сбросить рейтинг? Все голоса обнулятся.",
        confirmResetDisgust: "Сбросить все счётчики мерзости?",
        confirmClearLogs: "Очистить лог действий?",
        saved: "Сохранено!",
        resetDone: "Сброшено!"
    },
    en: {
        loginTitle: "🔐 Admin Login",
        passwordPlaceholder: "Password",
        loginBtn: "Login",
        wrongPassword: "Wrong password!",
        resetRating: "🏆 Reset rating",
        resetDisgust: "🤢 Reset disgust counters",
        clearLogs: "📋 Clear logs",
        logout: "🚪 Logout",
        topFactsTitle: "💩 Top Facts",
        addFact: "+ Add fact",
        saveFacts: "💾 Save facts",
        confessionsTitle: "🗣 Confessions",
        adminLogsTitle: "📜 Admin action log",
        delete: "Delete",
        confirmDelete: "Delete permanently?",
        confirmResetRating: "Reset all rating votes?",
        confirmResetDisgust: "Reset all disgust counters?",
        confirmClearLogs: "Clear action log?",
        saved: "Saved!",
        resetDone: "Reset done!"
    }
};

function t(key) {
    return i18n[adminLang][key] || key;
}

function updateUITexts() {
    document.querySelector("#loginForm h2").innerText = t('loginTitle');
    document.querySelector("#adminPassword").placeholder = t('passwordPlaceholder');
    document.querySelector("#loginBtn").innerText = t('loginBtn');
    document.querySelector("#loginError").innerText = t('wrongPassword');
    document.querySelector("#resetRatingBtn").innerText = t('resetRating');
    document.querySelector("#resetDisgustBtn").innerText = t('resetDisgust');
    document.querySelector("#clearLogsBtn").innerText = t('clearLogs');
    document.querySelector("#logoutBtn").innerText = t('logout');
    document.querySelector("#factsEditor h3").innerText = t('topFactsTitle');
    document.querySelector("#addFactBtn").innerText = t('addFact');
    document.querySelector("#saveFactsBtn").innerText = t('saveFacts');
    document.querySelector("#confessionsListAdmin h3").innerText = t('confessionsTitle');
    document.querySelector("#adminLogs h3").innerText = t('adminLogsTitle');
}

// ========== РАБОТА С ДАННЫМИ ==========
// Загружаем данные из localStorage (основного сайта, т.к. они хранятся в корне)
function loadData() {
    return {
        topFacts: JSON.parse(localStorage.getItem("trashTopFacts")) || 
            (adminLang === 'ru' ? 
                ["Некрофилы были замечены на кладбище с вибратором в форме кости.", "Педофилы в тюрьме становятся 'девочками' для других заключённых.", "Зоофилы пробовали скрестить овцу с табуреткой.", "АУЕшники красят ногти в черный и называют это 'понятия'.", "Говноеды утверждают, что какашки веганов слаще."] :
                ["Necrophiles were caught at cemetery with bone-shaped vibrator.", "Pedophiles in prison become 'girls' for other inmates.", "Zoophiles tried to cross a sheep with a stool.", "AUE thugs paint nails black and call it 'code'.", "Shit-eaters claim vegan poop is sweeter."]
            ),
        confessions: JSON.parse(localStorage.getItem("trashConfessions")) || [],
        rating: JSON.parse(localStorage.getItem("trashRating")) || {},
        disgust: JSON.parse(localStorage.getItem("disgustCounts")) || {},
        adminLogs: JSON.parse(localStorage.getItem("adminLogs")) || []
    };
}

function saveData(data) {
    localStorage.setItem("trashTopFacts", JSON.stringify(data.topFacts));
    localStorage.setItem("trashConfessions", JSON.stringify(data.confessions));
    localStorage.setItem("trashRating", JSON.stringify(data.rating));
    localStorage.setItem("disgustCounts", JSON.stringify(data.disgust));
    localStorage.setItem("adminLogs", JSON.stringify(data.adminLogs));
}

function addLog(action) {
    let logs = JSON.parse(localStorage.getItem("adminLogs")) || [];
    logs.unshift({ time: new Date().toLocaleString(), action: action });
    if (logs.length > 50) logs.pop();
    localStorage.setItem("adminLogs", JSON.stringify(logs));
    renderLogs();
}

function renderFactsEditor(data) {
    const container = document.getElementById("factsEditor");
    container.innerHTML = "";
    data.topFacts.forEach((fact, idx) => {
        const div = document.createElement("div");
        div.className = "fact-item";
        div.innerHTML = `
            <textarea class="fact-text" data-idx="${idx}" rows="2">${escapeHtml(fact)}</textarea>
            <button class="delete-fact" data-idx="${idx}">${t('delete')}</button>
        `;
        container.appendChild(div);
    });
    document.querySelectorAll(".delete-fact").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idx = parseInt(btn.dataset.idx);
            if (confirm(t('confirmDelete'))) {
                data.topFacts.splice(idx, 1);
                renderFactsEditor(data);
                addLog(`Удалён топ-факт #${idx+1}`);
            }
        });
    });
    document.querySelectorAll(".fact-text").forEach(textarea => {
        textarea.addEventListener("change", (e) => {
            const idx = parseInt(textarea.dataset.idx);
            data.topFacts[idx] = textarea.value;
            addLog(`Изменён топ-факт #${idx+1}`);
        });
    });
}

function renderConfessionsList(data) {
    const container = document.getElementById("confessionsListAdmin");
    container.innerHTML = "";
    if (data.confessions.length === 0) {
        container.innerHTML = "<p>Нет исповедей</p>";
        return;
    }
    data.confessions.forEach((conf, idx) => {
        const div = document.createElement("div");
        div.className = "confession-item";
        div.innerHTML = `
            <div class="confession-text">${escapeHtml(conf.text)}</div>
            <div class="confession-date">${escapeHtml(conf.date)}</div>
            <button class="delete-confession" data-idx="${idx}">${t('delete')}</button>
        `;
        container.appendChild(div);
    });
    document.querySelectorAll(".delete-confession").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idx = parseInt(btn.dataset.idx);
            if (confirm(t('confirmDelete'))) {
                data.confessions.splice(idx, 1);
                saveData(data);
                renderConfessionsList(data);
                addLog(`Удалена исповедь #${idx+1}`);
            }
        });
    });
}

function renderLogs() {
    const logs = JSON.parse(localStorage.getItem("adminLogs")) || [];
    const container = document.getElementById("adminLogs");
    container.innerHTML = logs.map(log => `<div class="log-entry">[${log.time}] ${escapeHtml(log.action)}</div>`).join('');
    if (logs.length === 0) container.innerHTML = "<p>Лог пуст</p>";
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// ========== ОБРАБОТЧИКИ ==========
function initAdmin() {
    let data = loadData();
    renderFactsEditor(data);
    renderConfessionsList(data);
    renderLogs();

    document.getElementById("saveFactsBtn").onclick = () => {
        // собираем тексты из textarea
        const textareas = document.querySelectorAll(".fact-text");
        const newFacts = [];
        textareas.forEach(ta => newFacts.push(ta.value));
        data.topFacts = newFacts;
        saveData(data);
        addLog("Сохранены топ-факты");
        alert(t('saved'));
        renderFactsEditor(data); // обновить, чтобы новые индексы
    };

    document.getElementById("addFactBtn").onclick = () => {
        data.topFacts.push("Новый факт");
        saveData(data);
        renderFactsEditor(data);
        addLog("Добавлен новый топ-факт");
    };

    document.getElementById("resetRatingBtn").onclick = () => {
        if (confirm(t('confirmResetRating'))) {
            data.rating = {};
            for (let i = 0; i < 29; i++) data.rating[i] = 0;
            saveData(data);
            addLog("Сброшен рейтинг биомусора");
            alert(t('resetDone'));
        }
    };

    document.getElementById("resetDisgustBtn").onclick = () => {
        if (confirm(t('confirmResetDisgust'))) {
            data.disgust = {};
            saveData(data);
            addLog("Сброшены счётчики мерзости");
            alert(t('resetDone'));
        }
    };

    document.getElementById("clearLogsBtn").onclick = () => {
        if (confirm(t('confirmClearLogs'))) {
            localStorage.setItem("adminLogs", JSON.stringify([]));
            renderLogs();
            addLog("Лог очищен");
            alert(t('resetDone'));
        }
    };

    document.getElementById("logoutBtn").onclick = () => {
        sessionStorage.removeItem("adminLoggedIn");
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("adminPanel").style.display = "none";
        addLog("Выход из админки");
    };
}

// ========== ЛОГИН ==========
function checkLogin() {
    if (sessionStorage.getItem("adminLoggedIn") === "true") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";
        initAdmin();
    } else {
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("adminPanel").style.display = "none";
    }
}

document.getElementById("loginBtn").onclick = () => {
    const pass = document.getElementById("adminPassword").value;
    if (pass === ADMIN_PASSWORD) {
        sessionStorage.setItem("adminLoggedIn", "true");
        checkLogin();
        addLog("Вход в админ-панель");
    } else {
        document.getElementById("loginError").style.display = "block";
        setTimeout(() => document.getElementById("loginError").style.display = "none", 2000);
    }
};

// Обновление языков
document.getElementById("admin-lang-ru").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "?hl=ru";
});
document.getElementById("admin-lang-en").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "?hl=en";
});

// Инициализация при загрузке
window.onload = () => {
    updateUITexts();
    checkLogin();
};