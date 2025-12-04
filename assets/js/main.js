"use strict";

const translations = {
    en: {
        hello: "👋 Hello!",
        homepage: "This is the homepage of",
        contactMe: "💬 Contact Me",
        mail: "📧 Email",
        corporate: "🎓 Corporate email",
        telegram: "💌 Telegram",
        seeAlso: "👀 See Also",
        linkedIn: "💻 LinkedIn",
        gitHub: "👨‍💻 GitHub",
        portfolio: "💼 Portfolio",
        holdings: "📈 Holdings",
        wallets: "💰 Wallets",
        timeline: "📝 Timeline",
        statusPrefix: "Right now I'm:",
        checkingStatus: "⏳ Checking the status...",
        statusMessages: {
            SLEEPING: "💤 Sleeping...",
            BUSY: "⚠️ Busy. ⛔ Do Not Disturb",
            AVAILABLE: "✅ Available for messaging, calls will be declined 📵",
            WEEKEND: "✨ On a weekend. 📳 Enjoying real life 🏞️",
            HOLIDAY: "🎉 On a holiday celebration with my family!"
        },
        footerGreetings: "🇫🇮 Made in Finland",
        footerCopyright: "© Rakin Ilia"
    },
    fi: {
        hello: "👋 Tervetuloa!",
        homepage: "Tämä on ",
        contactMe: "💬 Ota Yhteyttä",
        mail: "📧 Sähköposti",
        corporate: "🎓 Yrityssähköposti",
        telegram: "💌 Telegramissa",
        seeAlso: "👀 Katso Myös",
        linkedIn: "💻 LinkedIn:ssä",
        gitHub: "👨‍💻 GitHubissa",
        portfolio: "💼 Salkku",
        holdings: "📈 Pääoma",
        wallets: "💰 Lompakot",
        timeline: "📝 Aikajana",
        statusPrefix: "Tällä hetkellä olen:",
        checkingStatus: "⏳ Tarkistetaan tilanne...",
        statusMessages: {
            SLEEPING: "💤 Nukkumassa...",
            BUSY: "⚠️ Kiireinen. ⛔ Älä häiritse",
            AVAILABLE: "✅ Viesteille avoin, puhelut kieltäydytään 📵",
            WEEKEND: "✨ Viikonloppu. 📳 Nauttii oikeasta elämästä 🏞️",
            HOLIDAY: "🎉 Lomalla perheen kanssa!"
        },
        footerGreetings: "🇫🇮 Valmistettu Suomessa",
        footerCopyright: "© Rakin Ilia"
    },
    ru: {
        hello: "👋 Привет!",
        homepage: "Это сайт-визитка у ",
        contactMe: "💬 Свяжитесь со мной",
        mail: "📧 Личная почта",
        corporate: "🎓 Корпоративная почта",
        telegram: "💌 Телеграм",
        seeAlso: "👀 Также смотрите",
        linkedIn: "💻 LinkedIn",
        gitHub: "👨‍💻 GitHub",
        portfolio: "💼 Портфель",
        holdings: "📈 Активы",
        wallets: "💰 Кошельки",
        timeline: "📝 Временная линия",
        statusPrefix: "Сейчас я:",
        checkingStatus: "⏳ Проверяю статус...",
        statusMessages: {
            SLEEPING: "💤 Сплю...",
            BUSY: "⚠️ Занят. ⛔ Не беспокоить",
            AVAILABLE: "✅ Доступен для сообщений, но звонки не принимаю 📵",
            WEEKEND: "✨ На выходных. 📳 Наслаждаюсь жизнью 🏞️",
            HOLIDAY: "🎉 На отдыхе с семьей!"
        },
        footerGreetings: "🇫🇮 Сделано в Финляндии",
        footerCopyright: "© Илья Ракин"
    },
    de: {
        hello: "👋 Hallo!",
        homepage: "Dies ist die Homepage von",
        contactMe: "💬 Kontaktiere mich",
        mail: "📧 E-Mail",
        corporate: "🎓 Firmen-E-Mail",
        telegram: "💌 Telegram",
        seeAlso: "👀 Siehe auch",
        linkedIn: "💻 LinkedIn",
        gitHub: "👨‍💻 GitHub",
        portfolio: "💼 Portfolio",
        holdings: "📈 Beteiligungen",
        wallets: "💰 Wallets",
        timeline: "📝 Zeitlinie",
        statusPrefix: "Zurzeit bin ich:",
        checkingStatus: "⏳ Status wird überprüft...",
        statusMessages: {
            SLEEPING: "💤 Schläft...",
            BUSY: "⚠️ Beschäftigt. ⛔ Nicht stören",
            AVAILABLE: "✅ Verfügbar für Nachrichten, Anrufe werden abgelehnt 📵",
            WEEKEND: "✨ Am Wochenende. 📳 Genieße das echte Leben 🏞️",
            HOLIDAY: "🎉 Feiert mit der Familie!"
        },
        footerGreetings: "🇫🇮 Hergestellt in Finnland",
        footerCopyright: "© Rakin Ilia"
    }
};

// Timeline/Blog data
const timelineData = [
    {
        date: "2024-01-15",
        title: "Started New Project",
        description: "Launched an exciting new venture focusing on innovative solutions.",
        tag: "Milestone",
        type: "milestone"
    },
    {
        date: "2024-02-20",
        title: "Tech Conference 2024",
        description: "Attended the annual tech conference, met amazing developers and learned about cutting-edge technologies.",
        tag: "Event",
        type: "event"
    },
    {
        date: "2024-03-10",
        title: "Graduation Day",
        description: "Successfully completed my studies and graduated with honors. A significant milestone in my journey.",
        tag: "Milestone",
        type: "milestone"
    },
    {
        date: "2024-04-05",
        title: "Hackathon Winner",
        description: "Won first place in the regional hackathon with an innovative solution that impressed the judges.",
        tag: "Achievement",
        type: "achievement"
    },
    {
        date: "2024-05-18",
        title: "Open Source Contribution",
        description: "Made significant contributions to several open-source projects, helping the developer community.",
        tag: "Achievement",
        type: "achievement"
    },
    {
        date: "2024-06-22",
        title: "Summer Tech Meetup",
        description: "Organized and hosted a local tech meetup, bringing together developers from the region.",
        tag: "Event",
        type: "event"
    }
];

// Language Switcher Logic
function switchLanguage(lang) {
    const helloEl = document.querySelector("h1.hello");
    const homepageTextEl = document.querySelector(".homepage-text");
    const sectionTitles = document.querySelectorAll("h2.section-title");
    const contactLabels = document.querySelectorAll(".contact-label");
    const linkLabels = document.querySelectorAll(".link-label");
    const statusPrefixEl = document.querySelector("#status-prefix");
    const statusEl = document.querySelector("#status");
    const footerGreetingsEl = document.querySelector(".footer-greetings");
    const footerCopyrightEl = document.querySelector(".footer-copyright");
    const portfolioLabelEl = document.querySelector(".portfolio-label");

    if (helloEl) helloEl.textContent = translations[lang].hello;
    if (homepageTextEl) homepageTextEl.textContent = translations[lang].homepage;
    
    // Update section titles
    if (sectionTitles.length > 0) {
        // Contact Me
        if (sectionTitles[0]) sectionTitles[0].textContent = translations[lang].contactMe;
        // See Also
        if (sectionTitles[1]) sectionTitles[1].textContent = translations[lang].seeAlso;
        // Portfolio
        if (sectionTitles[2]) sectionTitles[2].textContent = translations[lang].portfolio;
        // Wallets
        if (sectionTitles[3]) sectionTitles[3].textContent = translations[lang].wallets;
        // Timeline
        if (sectionTitles[4]) sectionTitles[4].textContent = translations[lang].timeline;
    }
    
    // Update contact labels
    if (contactLabels.length >= 3) {
        contactLabels[0].textContent = translations[lang].mail + ":";
        contactLabels[1].textContent = translations[lang].corporate + ":";
        contactLabels[2].textContent = translations[lang].telegram + ":";
    }
    
    // Update link labels
    if (linkLabels.length >= 2) {
        linkLabels[0].textContent = translations[lang].linkedIn + ":";
        linkLabels[1].textContent = translations[lang].gitHub + ":";
    }
    
    // Update portfolio label
    if (portfolioLabelEl) portfolioLabelEl.textContent = translations[lang].holdings + ":";
    
    if (statusPrefixEl) statusPrefixEl.textContent = translations[lang].statusPrefix;
    if (statusEl) statusEl.textContent = translations[lang].checkingStatus;
    if (footerGreetingsEl) footerGreetingsEl.textContent = translations[lang].footerGreetings;
    if (footerCopyrightEl) footerCopyrightEl.textContent = translations[lang].footerCopyright;

    setTimeout(() => {
        updateStatusMessage(lang);
    }, 1000);
}

function updateStatusMessage(lang) {
    const currentHour = new Date().getHours();
    let status = "";

    if (currentHour >= 23 || currentHour < 9) {
        status = translations[lang].statusMessages.SLEEPING;
    } else if (currentHour >= 9 && currentHour < 17) {
        status = translations[lang].statusMessages.BUSY;
    } else {
        status = translations[lang].statusMessages.AVAILABLE;
    }

    const statusEl = document.querySelector("#status");
    if (statusEl) statusEl.textContent = status;
}

function saveLanguagePreference(lang) {
    localStorage.setItem("preferredLanguage", lang);
}

function loadLanguagePreference() {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    return savedLanguage || 'en';
}

// Song data (from songs.js)
const songs = [
    { title: "Freestyle", artist: "Lil Baby" },
    { title: "THANK GOD", artist: "Travis Scott" },
    { title: "Gang Gang", artist: "Polo G" },
    { title: "The Woo", artist: "Pop Smoke" },
    { title: "For The Night", artist: "Pop Smoke" },
    { title: "Mood Swings", artist: "Pop Smoke" },
    { title: "Dior", artist: "Pop Smoke" },
    { title: "The Box", artist: "Roddy Ricch" },
    { title: "SICKO MODE", artist: "Travis Scott" },
    { title: "Lucid Dreams", artist: "Juice WRLD" },
    { title: "Nonstop", artist: "Drake" },
    { title: "Better Now", artist: "Post Malone" },
    { title: "Sweater Weather", artist: "The Neighbourhood" }
];

// Update song status
function updateSongStatus() {
    const songStatusEl = document.getElementById("song-status");
    if (!songStatusEl || songs.length === 0) return;
    
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    songStatusEl.textContent = `Currently listening to: 🎵 ${randomSong.title} by ${randomSong.artist}`;
}

// Timeline rendering
function renderTimeline() {
    const container = document.getElementById("timeline-container");
    if (!container) return;

    // Sort timeline by date (newest first)
    const sortedTimeline = [...timelineData].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );

    container.innerHTML = sortedTimeline.map((item, index) => {
        const date = new Date(item.date);
        const formattedDate = date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        return `
            <div class="timeline-item" style="animation-delay: ${index * 0.1}s">
                <div class="timeline-content">
                    <div class="timeline-date">📅 ${formattedDate}</div>
                    <div class="timeline-title">${item.title}</div>
                    <p class="timeline-description">${item.description}</p>
                    <span class="timeline-tag">${item.tag}</span>
                </div>
            </div>
        `;
    }).join('');
}

document.getElementById("languageSwitcher")?.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    switchLanguage(selectedLanguage);
    saveLanguagePreference(selectedLanguage);
});

document.addEventListener("DOMContentLoaded", () => {
    const preferredLanguage = loadLanguagePreference();
    const switcher = document.getElementById("languageSwitcher");
    if (switcher) {
        switcher.value = preferredLanguage;
        switchLanguage(preferredLanguage);
    }
    
    // Render timeline
    renderTimeline();
    
    // Update song status
    updateSongStatus();
    // Update song status every 30 seconds
    setInterval(updateSongStatus, 30000);
});

// Banner display toggle on name click
const nameClickable = document.getElementById('name-clickable');
const banner = document.querySelector('.banner');

if (nameClickable) {
    nameClickable.addEventListener('click', (e) => {
        e.preventDefault();
        if (banner) banner.classList.toggle('show');
    });
}

if (banner) {
    banner.addEventListener('click', (event) => {
        if (event.target === banner) {
            banner.classList.remove('show');
        }
    });
}

// Schedule and Status logic
const now = () => new Date();

const year = now().getUTCFullYear();

const range = (start, end, base, value) => {
    const keys = Array.from(
        {length: end - start + 1},
        (_, i) => (start + i) % base
    );

    return keys.reduce(
        (acc, cur) => ({...acc, [cur]: value}),
        {}
    );
};

// Function to calculate Easter
function calculateEaster(year) {
    const f = Math.floor,
        G = year % 19,
        C = f(year / 100),
        H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
        I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
        J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
        L = I - J,
        month = 3 + f((L + 40) / 44),
        day = L + 28 - 31 * f(month / 4);

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

const SLEEPING = { message: translations.en.statusMessages.SLEEPING, dnd: true };
const BUSY = { message: translations.en.statusMessages.BUSY, dnd: false };
const AVAILABLE = { message: translations.en.statusMessages.AVAILABLE, dnd: false };
const WEEKEND = { message: translations.en.statusMessages.WEEKEND, dnd: true };

const fixedHolidays = {
    '01-01': 'Feast of the Circumcision of Christ (New Year\'s Day)',
    '01-06': 'Epiphany',
    '02-14': 'Valentine\'s Day',
    '03-08': 'International Women\'s Day',
    '03-14': 'Pi Day',
    '03-17': 'St. Patrick\'s Day',
    '04-01': 'April Fools\' Day',
    '04-07': 'World Health Day',
    '04-22': 'Earth Day',
    '05-01': 'International Workers\' Day',
    '05-04': 'Star Wars Day',
    '05-09': 'Europe Day',
    '05-12': 'International Nurses Day',
    '05-25': 'Towel Day',
    '06-01': 'International Children\'s Day',
    '06-05': 'World Environment Day',
    '06-12': 'World Day Against Child Labour',
    '06-21': 'Summer Solstice',
    '07-04': 'Independence Day',
    '07-14': 'Bastille Day',
    '08-15': 'Assumption of Mary',
    '09-08': 'International Literacy Day',
    '09-21': 'International Day of Peace',
    '10-04': 'World Animal Day',
    '10-31': 'Halloween',
    '11-01': 'All Saints\' Day',
    '11-11': 'Veterans Day',
    '11-20': 'Universal Children\'s Day',
    '11-22': 'Thanksgiving',
    '12-06': 'St. Nicholas Day',
    '12-24': 'Christmas Eve',
    '12-25': 'Christmas Day',
    '12-29': 'my Dad\'s Birthday',
    '12-31': 'New Year\'s Eve',
};

const movableHolidays = {
    [calculateEaster(year)]: 'Easter Sunday',
};

// Combine fixed and movable holidays
const holidays = {...fixedHolidays, ...movableHolidays};

const schedule = {
    ...range(1, 5, 7, {
        ...range(0, 6, 24, {
            message: SLEEPING,
            dnd: true,
        }),
        ...range(7, 17, 24, {
            message: BUSY,
            dnd: false,
        }),
        ...range(18, 23, 24, {
            message: AVAILABLE,
            dnd: false,
        }),
    }),
    ...range(6, 7, 7, {
        ...range(0, 23, 24, {
            message: WEEKEND,
            dnd: true,
        }),
    }),
};

const statusContainer = document.querySelector("#status");

// Function to format date in 'MM-DD' format
const formatDate = (date) => {
    return `${date.getUTCMonth() + 1}`.padStart(2, '0') + '-' + `${date.getUTCDate()}`.padStart(2, '0');
};

if (statusContainer) {
    setInterval(() => {
        const currentDate = now();
        const formattedDate = formatDate(currentDate);
        const dayOfWeek = currentDate.getUTCDay();
        const hour = currentDate.getUTCHours() + 3;

        if (holidays[formattedDate]) {
            statusContainer.textContent = `${translations.en.statusMessages.HOLIDAY} Today is ${holidays[formattedDate]} 👨‍👩‍👧‍👦`;
        } else {
            const status = schedule[dayOfWeek][hour];
            if (status && status.message !== statusContainer.textContent) {
                statusContainer.textContent = status.message;
            }
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    // Popup functionality
    const showPopup = (() => {
        let timeoutId = null;
        const popup = document.querySelector(".popup");
        const popupText = document.querySelector(".popup-text");

        return (content, isError = false, durationMs = 3000) => {
            if (!popup || !popupText) return;
            
            clearTimeout(timeoutId);

            popupText.textContent = content;

            // Toggle error styling based on isError flag
            popup.classList.toggle("error", isError);

            // Show the popup by adding the .show class
            popup.classList.add("show");

            // Hide the popup after the specified duration
            timeoutId = setTimeout(() => {
                popup.classList.remove("show");
            }, durationMs);
        };
    })();

    // Copy-to-clipboard functionality for elements with .copy class
    const copyElements = document.querySelectorAll(".copy");

    copyElements.forEach(element => {
        element.addEventListener("click", () => {
            const textToCopy = element.textContent.trim();

            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    // Show success popup
                    showPopup("Address copied to clipboard!");
                })
                .catch(err => {
                    // Show error popup if copy fails
                    console.error("Copy failed:", err);
                    showPopup("Failed to copy", true);
                });
        });
    });

    // Block contact links when status is Do Not Disturb
    const contactLinks = document.querySelectorAll(".contact");

    for (const link of contactLinks) {
        link.addEventListener("click", (event) => {
            const day = now().getUTCDay();
            const hour = now().getUTCHours() + 3;

            const status = schedule[day]?.[hour];

            if (status && status.dnd) {
                event.preventDefault();
                showPopup("Please, contact me later. I'm sleeping", true);
            }
        });
    }

    // Banner toggle logic
    const bannerButton = document.querySelector(".show-banner");
    const banner = document.querySelector(".banner");

    const showBanner = () => {
        if (banner) banner.classList.add("show");
    };

    const hideBanner = () => {
        if (banner) banner.classList.remove("show");
    };

    if (bannerButton) {
        bannerButton.addEventListener("click", showBanner);
    }

    if (banner) {
        banner.addEventListener("click", (event) => {
            if (event.target === banner) hideBanner();
        });
    }

    // Finnish Sauna Mode
    const footerGreetings = document.querySelector(".footer-greetings");
    const saunaOverlay = document.getElementById("saunaOverlay");
    const saunaEmoji = document.getElementById("saunaEmoji");
    let saunaTimeout = null;

    function getOriginalFooterText() {
        const preferredLanguage = loadLanguagePreference();
        return translations[preferredLanguage].footerGreetings;
    }

    if (footerGreetings && saunaOverlay && saunaEmoji) {
        footerGreetings.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Clear any existing timeout
            if (saunaTimeout) {
                clearTimeout(saunaTimeout);
            }

            // Activate sauna mode
            saunaOverlay.classList.add("active");
            saunaEmoji.classList.add("active");
            footerGreetings.classList.add("sauna-active");
            footerGreetings.textContent = "🇫🇮 Sauna on päällä";

            // Deactivate after 5 seconds
            saunaTimeout = setTimeout(() => {
                saunaOverlay.classList.remove("active");
                saunaEmoji.classList.remove("active");
                footerGreetings.classList.remove("sauna-active");
                footerGreetings.textContent = getOriginalFooterText();
            }, 5000);
        });
    }
});