// Theme Toggle and Global Search Functionality

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleDesktop = document.getElementById('themeToggleDesktop');
    const root = document.documentElement;
    
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme) {
        if (savedTheme === 'dark') {
            root.classList.add('dark-mode');
            root.classList.remove('light-mode');
        } else {
            root.classList.add('light-mode');
            root.classList.remove('dark-mode');
        }
    } else {
        // Use system preference if no saved preference
        if (systemPrefersDark) {
            root.classList.add('dark-mode');
        } else {
            root.classList.add('light-mode');
        }
    }
    
    updateThemeIcon();
    
    function toggleTheme() {
        if (root.classList.contains('dark-mode')) {
            root.classList.remove('dark-mode');
            root.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            root.classList.remove('light-mode');
            root.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
        updateThemeIcon();
    }
    
    function updateThemeIcon() {
        const icons = document.querySelectorAll('.theme-icon');
        icons.forEach(icon => {
            icon.textContent = root.classList.contains('dark-mode') ? '🌙' : '☀️';
        });
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleDesktop) {
        themeToggleDesktop.addEventListener('click', toggleTheme);
    }
}

// Global Search
function initGlobalSearch() {
    const searchModal = document.getElementById('searchModal');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchClose = document.getElementById('searchClose');
    const searchToggle = document.getElementById('searchToggle');
    const searchToggleDesktop = document.getElementById('searchToggleDesktop');
    
    // Searchable content
    const searchableContent = [];
    
    // Collect all searchable content
    function collectSearchableContent() {
        searchableContent.length = 0;
        
        // Collect from tech stack
        if (typeof techStackData !== 'undefined') {
            techStackData.forEach(tech => {
                searchableContent.push({
                    title: tech.name,
                    description: `${tech.category} • ${tech.projects.join(', ')}`,
                    type: 'Tech Stack',
                    keywords: [tech.name, tech.category, ...tech.tags, ...tech.projects].join(' ').toLowerCase(),
                    element: null
                });
            });
        }
        
        // Collect from projects
        if (typeof projectsData !== 'undefined') {
            projectsData.forEach(project => {
                searchableContent.push({
                    title: project.title,
                    description: project.description,
                    type: 'Project',
                    keywords: [project.title, project.description, ...project.techStack].join(' ').toLowerCase(),
                    element: null
                });
            });
        }
        
        // Collect from timeline
        if (typeof timelineData !== 'undefined') {
            timelineData.forEach(item => {
                searchableContent.push({
                    title: item.title,
                    description: item.description,
                    type: item.tag,
                    keywords: [item.title, item.description, item.tag].join(' ').toLowerCase(),
                    element: null
                });
            });
        }
        
        // Collect from about me
        if (typeof aboutMeData !== 'undefined') {
            searchableContent.push({
                title: 'About Me',
                description: aboutMeData.whoIAm + ' ' + aboutMeData.whatIDo,
                type: 'About',
                keywords: ['about', 'me', aboutMeData.whoIAm, aboutMeData.whatIDo].join(' ').toLowerCase(),
                element: null
            });
        }
        
        // Collect section titles
        document.querySelectorAll('h2.section-title').forEach(title => {
            searchableContent.push({
                title: title.textContent,
                description: 'Section',
                type: 'Section',
                keywords: title.textContent.toLowerCase(),
                element: title.closest('section')
            });
        });
    }
    
    function performSearch(query) {
        if (!query || query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        const lowerQuery = query.toLowerCase();
        const results = searchableContent.filter(item => 
            item.keywords.includes(lowerQuery) ||
            item.title.toLowerCase().includes(lowerQuery) ||
            item.description.toLowerCase().includes(lowerQuery)
        );
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
            return;
        }
        
        searchResults.innerHTML = results.slice(0, 10).map(item => `
            <div class="search-result-item" data-type="${item.type}">
                <div class="search-result-title">${highlightMatch(item.title, query)}</div>
                <div class="search-result-description">${highlightMatch(item.description.substring(0, 100), query)}${item.description.length > 100 ? '...' : ''}</div>
                <span class="search-result-type">${item.type}</span>
            </div>
        `).join('');
        
        // Add click handlers to scroll to element
        searchResults.querySelectorAll('.search-result-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                const result = results[index];
                if (result.element) {
                    result.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    closeSearch();
                } else {
                    // Scroll to relevant section
                    const section = document.querySelector(`.${result.type.toLowerCase().replace(/\s+/g, '-')}-section`);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        closeSearch();
                    }
                }
            });
        });
    }
    
    function highlightMatch(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
    
    function openSearch() {
        searchModal.classList.add('active');
        searchInput.focus();
        document.body.style.overflow = 'hidden';
        collectSearchableContent();
    }
    
    function closeSearch() {
        searchModal.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
        document.body.style.overflow = '';
    }
    
    // Event listeners
    if (searchToggle) {
        searchToggle.addEventListener('click', openSearch);
    }
    
    if (searchToggleDesktop) {
        searchToggleDesktop.addEventListener('click', openSearch);
    }
    
    if (searchClose) {
        searchClose.addEventListener('click', closeSearch);
    }
    
    if (searchModal) {
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                closeSearch();
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
        
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeSearch();
            }
        });
    }
    
    // Keyboard shortcut (Ctrl/Cmd + K)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initGlobalSearch();
});

