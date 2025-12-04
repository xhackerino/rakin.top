// Features JavaScript - All new interactive components

// Hire Me Modal
document.addEventListener("DOMContentLoaded", () => {
    const hireMeBtn = document.getElementById("hireMeBtn");
    const hireMeModal = document.getElementById("hireMeModal");
    const closeModal = document.getElementById("closeModal");

    if (hireMeBtn && hireMeModal) {
        hireMeBtn.addEventListener("click", () => {
            hireMeModal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    }

    if (closeModal && hireMeModal) {
        closeModal.addEventListener("click", () => {
            hireMeModal.classList.remove("active");
            document.body.style.overflow = "";
        });
    }

    if (hireMeModal) {
        hireMeModal.addEventListener("click", (e) => {
            if (e.target === hireMeModal) {
                hireMeModal.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }
});

// Render Tech Stack Matrix
function renderTechStack() {
    const container = document.getElementById("tech-stack-container");
    if (!container || typeof techStackData === "undefined") return;

    // Group by category
    const grouped = techStackData.reduce((acc, tech) => {
        if (!acc[tech.category]) acc[tech.category] = [];
        acc[tech.category].push(tech);
        return acc;
    }, {});

    container.innerHTML = Object.entries(grouped).map(([category, techs]) => `
        <div class="tech-category">
            <h3 class="tech-category-title">${category}</h3>
            <div class="tech-items">
                ${techs.map(tech => {
                    const daysAgo = Math.floor((new Date() - new Date(tech.lastUsed)) / (1000 * 60 * 60 * 24));
                    const lastUsedText = daysAgo === 0 ? "Today" : daysAgo === 1 ? "Yesterday" : `${daysAgo} days ago`;
                    
                    return `
                        <div class="tech-item">
                            <div class="tech-header">
                                <span class="tech-name">${tech.name}</span>
                                <span class="tech-last-used">Last used: ${lastUsedText}</span>
                            </div>
                            <div class="proficiency-bar-container">
                                <div class="proficiency-bar" style="width: ${tech.proficiency}%"></div>
                                <span class="proficiency-text">${tech.proficiency}%</span>
                            </div>
                            <div class="tech-tags">
                                ${tech.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join("")}
                            </div>
                            <div class="tech-projects">
                                <strong>Projects:</strong> ${tech.projects.join(", ")}
                            </div>
                        </div>
                    `;
                }).join("")}
            </div>
        </div>
    `).join("");
}

// Render Projects
function renderProjects() {
    const container = document.getElementById("projects-container");
    if (!container || typeof projectsData === "undefined") return;

    container.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-links">
                    ${project.hasDemo ? `<a href="${project.demo}" target="_blank" class="project-link demo">🌐 Live Demo</a>` : ""}
                    <a href="${project.github}" target="_blank" class="project-link github">💻 GitHub</a>
                </div>
            </div>
            <p class="project-description">${project.description}</p>
            
            <div class="project-tech-stack">
                <strong>Tech Stack:</strong>
                <div class="tech-badges">
                    ${project.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join("")}
                </div>
            </div>

            <div class="project-contributions">
                <strong>My Contributions:</strong>
                <ul>
                    ${project.contributions.map(cont => `<li>${cont}</li>`).join("")}
                </ul>
            </div>

            <div class="project-problems-solutions">
                <div class="problems">
                    <strong>Problems:</strong>
                    <ul>
                        ${project.problems.map(prob => `<li>${prob}</li>`).join("")}
                    </ul>
                </div>
                <div class="solutions">
                    <strong>Solutions:</strong>
                    <ul>
                        ${project.solutions.map(sol => `<li>${sol}</li>`).join("")}
                    </ul>
                </div>
            </div>
        </div>
    `).join("");
}

// Render About Me
function renderAboutMe() {
    const container = document.getElementById("about-container");
    if (!container || typeof aboutMeData === "undefined") return;

    container.innerHTML = `
        <div class="about-block">
            <h3>Who I Am</h3>
            <p>${aboutMeData.whoIAm}</p>
        </div>
        <div class="about-block">
            <h3>What I Do</h3>
            <p>${aboutMeData.whatIDo}</p>
        </div>
        <div class="about-block">
            <h3>Mission</h3>
            <p>${aboutMeData.mission}</p>
        </div>
        <div class="about-block">
            <h3>Values</h3>
            <ul class="values-list">
                ${aboutMeData.values.map(value => `<li>${value}</li>`).join("")}
            </ul>
        </div>
        <div class="about-block">
            <h3>Strengths</h3>
            <ul class="strengths-list">
                ${aboutMeData.strengths.map(strength => `<li>${strength}</li>`).join("")}
            </ul>
        </div>
        <div class="about-block">
            <h3>Languages</h3>
            <div class="languages-list">
                ${aboutMeData.languages.map(lang => `
                    <div class="language-item">
                        <span class="language-name">${lang.name}</span>
                        <span class="language-level">${lang.level}</span>
                    </div>
                `).join("")}
            </div>
        </div>
        <div class="about-block">
            <h3>Experience</h3>
            <div class="experience-list">
                ${aboutMeData.experience.map(exp => `
                    <div class="experience-item">
                        <div class="experience-header">
                            <strong>${exp.role}</strong> at <strong>${exp.company}</strong>
                            <span class="experience-period">${exp.period}</span>
                        </div>
                        <p>${exp.description}</p>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

// Render Public Keys
function renderPublicKeys() {
    const container = document.getElementById("public-keys-container");
    if (!container || typeof publicKeysData === "undefined") return;

    container.innerHTML = `
        <div class="keys-intro">
            <p>This section provides my public SSH and GPG keys, which can be used to verify my identity, validate signed commits, or securely communicate with me.</p>
        </div>
        <div class="key-section">
            <h3>SSH Public Key</h3>
            <p class="key-description">Used for secure authentication with GitHub, servers, and deployment systems. Sharing the public key allows collaborators to grant me access to infrastructure without passwords.</p>
            <div class="key-content">
                <code class="key-text" id="sshKey">${publicKeysData.ssh.key}</code>
                <button class="copy-key-btn" data-key="sshKey">📋 Copy</button>
            </div>
            <div class="key-info">
                <span><strong>Fingerprint:</strong> ${publicKeysData.ssh.fingerprint}</span>
                <span><strong>Comment:</strong> ${publicKeysData.ssh.comment}</span>
            </div>
        </div>
        <div class="key-section">
            <h3>GPG (PGP) Public Key</h3>
            <p class="key-description">Used to verify my signed commits on GitHub, ensuring authenticity, and to encrypt messages intended for me. Open-source maintainers and security-focused teams often rely on GPG keys to establish trust.</p>
            <div class="key-content">
                <code class="key-text" id="gpgKey">-----BEGIN PGP PUBLIC KEY BLOCK-----\n[Your GPG key here]\n-----END PGP PUBLIC KEY BLOCK-----</code>
                <button class="copy-key-btn" data-key="gpgKey">📋 Copy</button>
            </div>
            <div class="key-info">
                <span><strong>Key ID:</strong> ${publicKeysData.gpg.keyId}</span>
                <span><strong>Fingerprint:</strong> ${publicKeysData.gpg.fingerprint}</span>
                <span><strong>Email:</strong> ${publicKeysData.gpg.email}</span>
            </div>
        </div>
        <div class="keys-note">
            <p><strong>Note:</strong> Public keys are safe to publish and are commonly shared by professional developers, especially those involved in open-source, server management, or security-conscious environments.</p>
        </div>
    `;

    // Add copy functionality
    document.querySelectorAll(".copy-key-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const keyId = btn.getAttribute("data-key");
            const keyElement = document.getElementById(keyId);
            if (keyElement) {
                navigator.clipboard.writeText(keyElement.textContent).then(() => {
                    btn.textContent = "✓ Copied!";
                    setTimeout(() => {
                        btn.textContent = "📋 Copy";
                    }, 2000);
                });
            }
        });
    });
}

// Render Portfolio Carousel
function renderPortfolioCarousel() {
    const container = document.getElementById("portfolio-carousel");
    if (!container) return;

    // Sample portfolio items - you can replace with actual images
    const portfolioItems = [
        { type: "screenshot", title: "E-commerce App", image: "assets/jpg/my-photo.jpg" },
        { type: "mockup", title: "Dashboard UI", image: "assets/jpg/my-photo.jpg" },
        { type: "diagram", title: "System Architecture", image: "assets/jpg/my-photo.jpg" },
        { type: "achievement", title: "Award Certificate", image: "assets/jpg/my-photo.jpg" }
    ];

    container.innerHTML = `
        <div class="carousel-wrapper">
            <button class="carousel-btn prev" id="carouselPrev">‹</button>
            <div class="carousel-track" id="carouselTrack">
                ${portfolioItems.map((item, index) => `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                        <img src="${item.image}" alt="${item.title}" />
                        <div class="carousel-item-label">${item.title}</div>
                    </div>
                `).join("")}
            </div>
            <button class="carousel-btn next" id="carouselNext">›</button>
        </div>
        <div class="carousel-indicators">
            ${portfolioItems.map((_, index) => `
                <span class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
            `).join("")}
        </div>
    `;

    // Carousel functionality
    let currentIndex = 0;
    const items = container.querySelectorAll(".carousel-item");
    const indicators = container.querySelectorAll(".indicator");
    const prevBtn = document.getElementById("carouselPrev");
    const nextBtn = document.getElementById("carouselNext");

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.toggle("active", index === currentIndex);
        });
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentIndex);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Auto-advance carousel
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 5000);
}

// Initialize all features
document.addEventListener("DOMContentLoaded", () => {
    renderTechStack();
    renderProjects();
    renderAboutMe();
    renderPublicKeys();
    renderPortfolioCarousel();
});

