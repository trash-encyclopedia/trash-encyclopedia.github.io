// ========== ПАРОЛЬ (жестко зашит) ==========
const ADMIN_PASSWORD = "TrashAdmin666";

// ========== ОПРЕДЕЛЕНИЕ ЯЗЫКА ИНТЕРФЕЙСА АДМИНКИ ==========
const urlParams = new URLSearchParams(window.location.search);
let adminLang = urlParams.get('hl');
// допустимые языки: ru, en, zh, ar, de, fr, es, pt, it
const supportedLangs = ['ru', 'en', 'zh', 'ar', 'de', 'fr', 'es', 'pt', 'it'];
if (!supportedLangs.includes(adminLang)) adminLang = 'ru';
localStorage.setItem('adminLang', adminLang);

// ========== ПЕРЕВОДЫ ИНТЕРФЕЙСА ==========
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
    },
    zh: {
        loginTitle: "🔐 管理员登录",
        passwordPlaceholder: "密码",
        loginBtn: "登录",
        wrongPassword: "密码错误！",
        resetRating: "🏆 重置评分",
        resetDisgust: "🤢 重置恶心计数器",
        clearLogs: "📋 清空日志",
        logout: "🚪 退出",
        topFactsTitle: "💩 热门事实",
        addFact: "+ 添加事实",
        saveFacts: "💾 保存事实",
        confessionsTitle: "🗣 忏悔录",
        adminLogsTitle: "📜 管理员操作日志",
        delete: "删除",
        confirmDelete: "永久删除？",
        confirmResetRating: "重置所有评分？",
        confirmResetDisgust: "重置所有恶心计数器？",
        confirmClearLogs: "清空操作日志？",
        saved: "已保存！",
        resetDone: "重置完成！"
    },
    ar: {
        loginTitle: "🔐 دخول المشرف",
        passwordPlaceholder: "كلمة المرور",
        loginBtn: "دخول",
        wrongPassword: "كلمة مرور خاطئة!",
        resetRating: "🏆 إعادة تعيين التقييم",
        resetDisgust: "🤢 إعادة تعيين عدادات الاشمئزاز",
        clearLogs: "📋 مسح السجلات",
        logout: "🚪 خروج",
        topFactsTitle: "💩 الحقائق الأكثر",
        addFact: "+ إضافة حقيقة",
        saveFacts: "💾 حفظ الحقائق",
        confessionsTitle: "🗣 الاعترافات",
        adminLogsTitle: "📜 سجل إجراءات المشرف",
        delete: "حذف",
        confirmDelete: "حذف نهائي؟",
        confirmResetRating: "إعادة تعيين كل التقييمات؟",
        confirmResetDisgust: "إعادة تعيين عدادات الاشمئزاز؟",
        confirmClearLogs: "مسح سجل الإجراءات؟",
        saved: "تم الحفظ!",
        resetDone: "تمت إعادة التعيين!"
    },
    de: {
        loginTitle: "🔐 Admin-Login",
        passwordPlaceholder: "Passwort",
        loginBtn: "Anmelden",
        wrongPassword: "Falsches Passwort!",
        resetRating: "🏆 Bewertung zurücksetzen",
        resetDisgust: "🤢 Ekel-Zähler zurücksetzen",
        clearLogs: "📋 Logs löschen",
        logout: "🚪 Abmelden",
        topFactsTitle: "💩 Top-Fakten",
        addFact: "+ Fakt hinzufügen",
        saveFacts: "💾 Fakten speichern",
        confessionsTitle: "🗣 Geständnisse",
        adminLogsTitle: "📜 Admin-Protokoll",
        delete: "Löschen",
        confirmDelete: "Endgültig löschen?",
        confirmResetRating: "Alle Bewertungen zurücksetzen?",
        confirmResetDisgust: "Alle Ekel-Zähler zurücksetzen?",
        confirmClearLogs: "Protokoll löschen?",
        saved: "Gespeichert!",
        resetDone: "Zurückgesetzt!"
    },
    fr: {
        loginTitle: "🔐 Connexion admin",
        passwordPlaceholder: "Mot de passe",
        loginBtn: "Se connecter",
        wrongPassword: "Mot de passe incorrect !",
        resetRating: "🏆 Réinitialiser le classement",
        resetDisgust: "🤢 Réinitialiser les compteurs de dégoût",
        clearLogs: "📋 Effacer les journaux",
        logout: "🚪 Déconnexion",
        topFactsTitle: "💩 Faits les plus",
        addFact: "+ Ajouter un fait",
        saveFacts: "💾 Enregistrer les faits",
        confessionsTitle: "🗣 Confessions",
        adminLogsTitle: "📜 Journal d'actions admin",
        delete: "Supprimer",
        confirmDelete: "Supprimer définitivement ?",
        confirmResetRating: "Réinitialiser tous les votes ?",
        confirmResetDisgust: "Réinitialiser tous les compteurs de dégoût ?",
        confirmClearLogs: "Effacer le journal ?",
        saved: "Enregistré !",
        resetDone: "Réinitialisé !"
    },
    es: {
        loginTitle: "🔐 Acceso Admin",
        passwordPlaceholder: "Contraseña",
        loginBtn: "Ingresar",
        wrongPassword: "¡Contraseña incorrecta!",
        resetRating: "🏆 Restablecer puntuación",
        resetDisgust: "🤢 Restablecer contadores de asco",
        clearLogs: "📋 Borrar registros",
        logout: "🚪 Salir",
        topFactsTitle: "💩 Datos más destacados",
        addFact: "+ Agregar dato",
        saveFacts: "💾 Guardar datos",
        confessionsTitle: "🗣 Confesiones",
        adminLogsTitle: "📜 Registro de acciones admin",
        delete: "Eliminar",
        confirmDelete: "¿Eliminar permanentemente?",
        confirmResetRating: "¿Restablecer todas las votaciones?",
        confirmResetDisgust: "¿Restablecer todos los contadores de asco?",
        confirmClearLogs: "¿Borrar registro de acciones?",
        saved: "¡Guardado!",
        resetDone: "¡Restablecido!"
    },
    pt: {
        loginTitle: "🔐 Login Admin",
        passwordPlaceholder: "Senha",
        loginBtn: "Entrar",
        wrongPassword: "Senha incorreta!",
        resetRating: "🏆 Redefinir classificação",
        resetDisgust: "🤢 Redefinir contadores de nojo",
        clearLogs: "📋 Limpar registros",
        logout: "🚪 Sair",
        topFactsTitle: "💩 Principais fatos",
        addFact: "+ Adicionar fato",
        saveFacts: "💾 Salvar fatos",
        confessionsTitle: "🗣 Confissões",
        adminLogsTitle: "📜 Registro de ações admin",
        delete: "Excluir",
        confirmDelete: "Excluir permanentemente?",
        confirmResetRating: "Redefinir todas as votações?",
        confirmResetDisgust: "Redefinir todos os contadores de nojo?",
        confirmClearLogs: "Limpar registro de ações?",
        saved: "Salvo!",
        resetDone: "Redefinido!"
    },
    it: {
        loginTitle: "🔐 Accesso Admin",
        passwordPlaceholder: "Password",
        loginBtn: "Accedi",
        wrongPassword: "Password errata!",
        resetRating: "🏆 Azzera punteggio",
        resetDisgust: "🤢 Azzera contatori disgusto",
        clearLogs: "📋 Cancella log",
        logout: "🚪 Esci",
        topFactsTitle: "💩 Fatti principali",
        addFact: "+ Aggiungi fatto",
        saveFacts: "💾 Salva fatti",
        confessionsTitle: "🗣 Confessioni",
        adminLogsTitle: "📜 Registro azioni admin",
        delete: "Elimina",
        confirmDelete: "Eliminare definitivamente?",
        confirmResetRating: "Azzera tutte le votazioni?",
        confirmResetDisgust: "Azzera tutti i contatori disgusto?",
        confirmClearLogs: "Cancellare il registro azioni?",
        saved: "Salvato!",
        resetDone: "Azzera effettuato!"
    }
};

function t(key) {
    return i18n[adminLang]?.[key] || i18n.ru[key] || key;
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
    // обновляем кнопки удаления, если они уже есть (перерендер потом)
    document.querySelectorAll(".delete-fact, .delete-confession").forEach(btn => {
        if (btn.innerText !== t('delete')) btn.innerText = t('delete');
    });
}

// Остальная часть файла (loadData, saveData, addLog, renderFactsEditor и т.д.) остаётся без изменений,
// только внутри renderFactsEditor и renderConfessionsList нужно использовать t('delete') для кнопок.
// Ниже приведены эти функции с использованием t('delete').

// ========== РАБОТА С ДАННЫМИ ==========
function loadData() {
    return {
        topFacts: JSON.parse(localStorage.getItem("trashTopFacts")) || 
            (adminLang === 'ru' ? 
                ["Некрофилы были замечены на кладбище с вибратором в форме кости.", "Педофилы в тюрьме становятся 'девочками' для других заключённых.", "Зоофилы пробовали скрестить овцу с табуреткой.", "АУЕшники красят ногти в черный и называют это 'понятия'.", "Говноеды утверждают, что какашки веганов слаще."] :
                ["Necrophiles were caught at cemetery with bone-shaped vibrator.", "Pedophiles in prison become 'girls' for other inmates.", "Zoophiles tried to cross a sheep with a stool.", "AUE thugs paint nails black and call it 'code'.', 'Shit-eaters claim vegan poop is sweeter."]
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
        const textareas = document.querySelectorAll(".fact-text");
        const newFacts = [];
        textareas.forEach(ta => newFacts.push(ta.value));
        data.topFacts = newFacts;
        saveData(data);
        addLog("Сохранены топ-факты");
        alert(t('saved'));
        renderFactsEditor(data);
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

// Переключение языка через кнопки уже обрабатывается прямыми ссылками в HTML, поэтому дополнительных обработчиков не нужно.

window.onload = () => {
    updateUITexts();
    checkLogin();
};