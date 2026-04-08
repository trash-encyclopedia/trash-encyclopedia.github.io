// ======================== ОПРЕДЕЛЕНИЕ ЯЗЫКА ИЗ ПУТИ ========================
let currentLang = window.location.pathname.startsWith('/en/') ? 'en' : 'ru';
// Сохраняем в localStorage, чтобы корневой редирект работал
localStorage.setItem('trashLang', currentLang);

// ======================== ДАННЫЕ ДЛЯ КАРТОЧЕК ========================
const categoriesData = {
    ru: [
        { id: 0, name: "💀 Суицидники", desc: "Профи по самовыпилу. Жизнь — боль, но на нашем сайте это повод для чёрной шутки.", icon: "🪦" },
        { id: 1, name: "🧛‍♂️ Некрофилы", desc: "Любовь до гроба... буквально. Мёртвые — самые покладистые партнёры.", icon: "⚰️" },
        { id: 2, name: "🐶 Зоофилы", desc: "Фанаты хвостатых. Лучше бы кота завели, а не это.", icon: "🐕" },
        { id: 3, name: "👧 Педофилы", desc: "Отбросы ниже плинтуса. Наш сайт их не щадит — только насмешки и презрение.", icon: "🚫" },
        { id: 4, name: "🏳️‍🌈 Гомики", desc: "Голубые, розовые, радужные. В энциклопедии биомусора — без хейта, просто стёб.", icon: "🌈" },
        { id: 5, name: "⚧ Трансы", desc: "Смена пола как перезагрузка. Иногда весело, иногда грустно.", icon: "🏳️‍⚧️" },
        { id: 6, name: "👩‍❤️‍👩 Лесбух", desc: "Девушки, которые любят девушек. Навалом драмы и фем-панка.", icon: "👩‍❤️‍💋‍👩" },
        { id: 7, name: "🎀 Фембои", desc: "Парни в юбках, милота и путаница в голове.", icon: "🌸" },
        { id: 8, name: "✊ Дрочеры", desc: "Короли подзамочных эскортов. Рука — лучший друг.", icon: "💦" },
        { id: 9, name: "🍺 Алкашня", desc: "Похмелье и мудрость на дне стакана. Жиза.", icon: "🥃" },
        { id: 10, name: "💉 Нарики", desc: "Химики-любители. Спойлер: передоз не смешной, но мы троллим.", icon: "💊" },
        { id: 11, name: "☕ Кофеманы", desc: "Без кофе — овощи. С кофе — дерзкие овощи.", icon: "☕" },
        { id: 12, name: "⛓️ Фетишисты", desc: "Латекс, кожа, резина — всё в ход.", icon: "🔗" },
        { id: 13, name: "💩 Любители говна", desc: "Копрофаги — странные ребята. Вкусы специфические.", icon: "💩" },
        { id: 14, name: "🧙 Вагинальные ведьмы", desc: "Магия через лоно. Заговоры и споры.", icon: "🧙♀️" },
        { id: 15, name: "🐺 Сигма-бойцы", desc: "Одиночки-альфачи, которые ничего не добились, но очень пафосные.", icon: "🐺" },
        { id: 16, name: "💉 Антиваксеры", desc: "Чипирование? Нет, спасибо. Лучше полиомиелит.", icon: "💉🚫" },
        { id: 17, name: "🍎 Яблодрочеры", desc: "Фанаты Apple — покупают одно и то же каждый год.", icon: "📱" },
        { id: 18, name: "💃 Шалавы", desc: "Понятие растяжимое, но мы про девчонок с твирком.", icon: "💃" },
        { id: 19, name: "🧟 Бомжар", desc: "Короли помойки и философы с вокзалов.", icon: "🏚️" },
        { id: 20, name: "🧔‍♂️ Блядуны", desc: "Мужики-шалавы, которые изменяют направо и налево.", icon: "🐷" },
        { id: 21, name: "🌻 Укропы", desc: "Украинские патриоты (сатира, без серьезной политики).", icon: "🌻" },
        { id: 22, name: "🐻 Кацапы", desc: "Стереотипные москали — по-доброму троллим.", icon: "🐻" },
        { id: 23, name: "🥔 Бульбаши", desc: "Белорусы и картошка — легендарный дуэт.", icon: "🥔" },
        { id: 24, name: "🦅 Пиндосы", desc: "Американские стереотипы: бургеры, оружие, флаг.", icon: "🇺🇸" },
        { id: 25, name: "🐉 Узкоглазые", desc: "Азиаты глазами расистской шутки — у нас это ирония над ксенофобами.", icon: "🥢" },
        { id: 26, name: "🤙 АУЕшники", desc: "Понятия, закон и блатной романтик.", icon: "🔪" },
        { id: 27, name: "💨 Вейперы", desc: "Облака дыма и ацтекские танцы с бульками.", icon: "💨" },
        { id: 28, name: "🍳 Говноеды", desc: "Экстремальные гурманы — не для слабонервных.", icon: "🍲" }
    ],
    en: [
        { id: 0, name: "💀 Suiciders", desc: "Self-exit pros. Life sucks, but we mock with dark humor.", icon: "🪦" },
        { id: 1, name: "🧛‍♂️ Necrophiles", desc: "Love beyond the grave. The dead are the quietest partners.", icon: "⚰️" },
        { id: 2, name: "🐶 Zoophiles", desc: "Furry fanatics. Should've just adopted a cat.", icon: "🐕" },
        { id: 3, name: "👧 Pedophiles", desc: "Trash below the plinth. Mockery and contempt only.", icon: "🚫" },
        { id: 4, name: "🏳️‍🌈 Faggots (satire)", desc: "Queer folk – just banter, no real hate.", icon: "🌈" },
        { id: 5, name: "⚧ Trans", desc: "Gender switch as reboot. Sometimes fun, sometimes sad.", icon: "🏳️‍⚧️" },
        { id: 6, name: "👩‍❤️‍👩 Lesbians", desc: "Women loving women. Drama and femme-punk.", icon: "👩‍❤️‍💋‍👩" },
        { id: 7, name: "🎀 Femboys", desc: "Boys in skirts, cuteness & confusion.", icon: "🌸" },
        { id: 8, name: "✊ Wankers", desc: "Kings of the keyhole. Hand is the best buddy.", icon: "💦" },
        { id: 9, name: "🍺 Alcoholics", desc: "Hangover wisdom. Cheers to bad decisions.", icon: "🥃" },
        { id: 10, name: "💉 Junkies", desc: "Amateur chemists. Overdose is no joke, but we troll.", icon: "💊" },
        { id: 11, name: "☕ Coffeeholics", desc: "Without coffee – vegetables. With coffee – sassy veggies.", icon: "☕" },
        { id: 12, name: "⛓️ Fetishists", desc: "Latex, leather, rubber — everything works.", icon: "🔗" },
        { id: 13, name: "💩 Shit lovers", desc: "Coprophages – weird taste.", icon: "💩" },
        { id: 14, name: "🧙 Vaginal Witches", desc: "Magic through the womb. Spells & arguments.", icon: "🧙♀️" },
        { id: 15, name: "🐺 Sigma boys", desc: "Lone alpha wannabes. All pose, no result.", icon: "🐺" },
        { id: 16, name: "💉 Antivaxxers", desc: "No microchips? Enjoy polio.", icon: "💉🚫" },
        { id: 17, name: "🍎 Apple simps", desc: "Buy same phone every year.", icon: "📱" },
        { id: 18, name: "💃 Hoes", desc: "Twerk queens & party animals.", icon: "💃" },
        { id: 19, name: "🧟 Hobos", desc: "Trash kings & station philosophers.", icon: "🏚️" },
        { id: 20, name: "🧔‍♂️ Man-hoes", desc: "Cheating dudes left and right.", icon: "🐷" },
        { id: 21, name: "🌻 Uki (satire)", desc: "Ukrainian stereotypes – parody.", icon: "🌻" },
        { id: 22, name: "🐻 Katsaps", desc: "Russian stereotypes – friendly trolling.", icon: "🐻" },
        { id: 23, name: "🥔 Bulbash", desc: "Belarusians & potatoes – legendary duo.", icon: "🥔" },
        { id: 24, name: "🦅 Pindos", desc: "US cliches: burgers, guns, flag.", icon: "🇺🇸" },
        { id: 25, name: "🐉 Slanty-eyed", desc: "Asians through racist joke – irony against xenophobia.", icon: "🥢" },
        { id: 26, name: "🤙 AUE thugs", desc: "Thieves' law & romanticized crime.", icon: "🔪" },
        { id: 27, name: "💨 Vapers", desc: "Clouds of smoke & bubble tricks.", icon: "💨" },
        { id: 28, name: "🍳 Shit-eaters", desc: "Extreme gourmets – not for faint hearts.", icon: "🍲" }
    ]
};

// ======================== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ========================
let currentFilter = "";
let sortMode = "default";
let disgustStorage = JSON.parse(localStorage.getItem("disgustCounts")) || {};

// ======================== ФУНКЦИЯ ОТРИСОВКИ КАРТОЧЕК ========================
function renderCards() {
    let data = categoriesData[currentLang];
    let filtered = data.filter(item => 
        item.name.toLowerCase().includes(currentFilter.toLowerCase()) || 
        item.desc.toLowerCase().includes(currentFilter.toLowerCase())
    );
    if (sortMode === "az") filtered.sort((a,b) => a.name.localeCompare(b.name));
    if (sortMode === "za") filtered.sort((a,b) => b.name.localeCompare(a.name));
    
    const container = document.getElementById("cardsContainer");
    container.innerHTML = "";
    filtered.forEach(cat => {
        const count = disgustStorage[cat.id] || 0;
        const card = document.createElement("div");
        card.className = "glass-card";
        card.innerHTML = `
            <div class="card-header">
                <div class="card-icon">${cat.icon}</div>
                <div class="card-title">${cat.name}</div>
            </div>
            <div class="card-desc">${cat.desc}</div>
            <div class="card-footer">
                <button class="disgust-btn" data-id="${cat.id}">🤢 +1 disgust</button>
                <span class="disgust-count" id="disgust-${cat.id}">🤮 ${count}</span>
            </div>
        `;
        container.appendChild(card);
    });
    document.querySelectorAll(".disgust-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            disgustStorage[id] = (disgustStorage[id] || 0) + 1;
            localStorage.setItem("disgustCounts", JSON.stringify(disgustStorage));
            const span = document.getElementById(`disgust-${id}`);
            if(span) span.innerText = `🤮 ${disgustStorage[id]}`;
            updateCounterUI();
        });
    });
    updateCounterUI();
}

function updateCounterUI() {
    const total = document.querySelectorAll(".disgust-count").length;
    const sum = Object.values(disgustStorage).reduce((a,b)=>a+b,0);
    const prefix = currentLang === 'ru' ? '🧟 Мусора: ' : '🧟 Trash count: ';
    document.getElementById("counterDisplay").innerHTML = `${prefix}${total} | 🤮 ${sum}`;
}

// ======================== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА (РЕДИРЕКТ) ========================
function switchLanguage(lang) {
    localStorage.setItem('trashLang', lang);
    window.location.href = '/' + lang + '/';
}

// ======================== ТЕМЫ ========================
function setTheme(theme) {
    document.body.classList.remove("theme-light", "theme-dark", "theme-contrast", "theme-accessibility");
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem("trashTheme", theme);
}

function initTheme() {
    const saved = localStorage.getItem("trashTheme") || "dark";
    setTheme(saved);
    document.querySelectorAll(".theme-switcher button").forEach(btn => {
        btn.addEventListener("click", () => setTheme(btn.dataset.theme));
    });
}

// ======================== СЛУЧАЙНЫЙ ФАКТ ========================
const randomFacts = {
    ru: ["Самовыпил в 18 веке был элитным развлечением аристократов.", "Педофилы ненавидят нашу энциклопедию — хороший знак.", "Некрофилы всегда опаздывают на свидания...", "Самый мерзкий фетиш — платить налоги вовремя.", "В России АУЕ — миф, но шутки остаются."],
    en: ["Self-exit was an elite hobby in 18th century.", "Pedophiles hate our site — good sign.", "Necrophiles are always late to dates.", "The most disgusting fetish is paying taxes on time.", "AUE thugs are mostly myth, but jokes remain."]
};
function showRandomFact() {
    const facts = randomFacts[currentLang];
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("modalText").innerText = facts[randomIndex];
    document.getElementById("modal").style.display = "flex";
}

function selfDestructJoke() {
    alert(currentLang === 'ru' ? "💀 Не советуем, но если очень хочется — позвоните другу. А это просто шутка энциклопедии." : "💀 Don't actually do it. Call a friend. Just a dark joke.");
}

// ======================== ИНИЦИАЛИЗАЦИЯ И СОБЫТИЯ ========================
document.addEventListener("DOMContentLoaded", () => {
    renderCards();
    initTheme();

    // Кнопки поиска и сортировки
    document.getElementById("searchInput").addEventListener("input", (e) => {
        currentFilter = e.target.value;
        renderCards();
    });
    document.getElementById("sortAZ").addEventListener("click", () => {
        sortMode = "az";
        renderCards();
    });
    document.getElementById("sortZA").addEventListener("click", () => {
        sortMode = "za";
        renderCards();
    });
    document.getElementById("resetFilter").addEventListener("click", () => {
        currentFilter = "";
        sortMode = "default";
        document.getElementById("searchInput").value = "";
        renderCards();
    });
    document.getElementById("randomFactBtn").addEventListener("click", showRandomFact);
    document.getElementById("selfDestructBtn").addEventListener("click", selfDestructJoke);
    document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
    });
    window.addEventListener("click", (e) => {
        if (e.target === document.getElementById("modal")) document.getElementById("modal").style.display = "none";
    });

    // Переключение языка через кнопки
    document.getElementById("lang-ru").addEventListener("click", () => switchLanguage('ru'));
    document.getElementById("lang-en").addEventListener("click", () => switchLanguage('en'));

    // Параллакс-эффект
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        const bg = document.querySelector(".glow-bg");
        if(bg) bg.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
});