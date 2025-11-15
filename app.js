try {
    const menuBtn = document.getElementById('hamburger');
    const mainMenu = document.getElementById('mainMenu');
    if (menuBtn && mainMenu) {
        menuBtn.addEventListener('click', () => {
            mainMenu.classList.toggle('hidden');
            mainMenu.setAttribute('aria-hidden', mainMenu.classList.contains('hidden') ? 'true' : 'false');
        });
    }

    document.querySelectorAll('#mainMenu a').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const page = a.dataset.page;
            showPage(page);
            if (mainMenu) mainMenu.classList.add('hidden');
        });
    });

    function showPage(page) {
        document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
        const el = document.getElementById(page);
        if (el) {
            el.classList.remove('hidden');
            el.scrollIntoView({ behavior: 'smooth' });
        }
        if (page === 'tools') initTools();
        if (page === 'quiz') loadQuiz();
    }

    const topics = {
        "paths": {
            "title": "Construct/Interpret Absolute vs. Relative Paths",
            "content": `
            <h3>🌍 1. What is an Absolute Path?</h3>
            <p>Absolute Path = the full address of a file from the root of the system.</p>
            ...
            <img src="assets/images/abs_rel_diagram.png" alt="Absolute vs Relative Diagram" style="max-width:100%;border-radius:8px;margin-bottom:8px;" onerror="this.style.display='none';">
            <img src="assets/images/abs_step_text.png" alt="Absolute Path Steps" style="max-width:100%;border-radius:8px;margin-bottom:8px;" onerror="this.style.display='none';">
            <img src="assets/images/analogy_barangay.png" alt="Analogy Diagram" style="max-width:100%;border-radius:8px;margin-bottom:8px;" onerror="this.style.display='none';">
            `
        },
        "search": {
            "title": "Use Search Operators and Saved Searches",
            "content": `
            <h3>🔍 What is "Use Search Operators and Saved Searches"?</h3>
            ...
            `
        },
        "organize": {
            "title": "Organize with System Folders Appropriately",
            "content": `
            <h3>📂 What Is “Organize with System Folders Appropriately”?</h3>
            ...
            `
        }
    };

    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.topic;
            const area = document.getElementById('topicContent');
            if (area && topics[id]) {
                area.innerHTML = `<h2>${topics[id].title}</h2>` + topics[id].content;
                area.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    let folders = { documents: [], pictures: [], music: [] };
    let currentCategory = 'documents';

    function initTools() {
        const fileList = document.getElementById('fileList');
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');
        const newFolderBtn = document.getElementById('newFolderBtn');
        const noFoldersMsg = document.getElementById('noFoldersMsg');

        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                currentCategory = item.dataset.category;
                renderFolders();
            });
        });

        if (newFolderBtn) {
            newFolderBtn.onclick = () => {
                const folderName = prompt('Enter folder name:');
                if (folderName) {
                    const category = prompt('Place in: Documents, Pictures, or Music?').toLowerCase();
                    if (['documents', 'pictures', 'music'].includes(category)) {
                        folders[category].push(folderName);
                        if (currentCategory === category) renderFolders();
                        alert(`Folder "${folderName}" added to ${category.charAt(0).toUpperCase() + category.slice(1)}`);
                    } else {
                        alert('Invalid category. Choose Documents, Pictures, or Music.');
                    }
                }
            };
        }

        if (searchBtn && searchInput) {
            searchBtn.onclick = () => {
                const query = searchInput.value.toLowerCase().trim();
                if (!query) {
                    renderFolders();
                    return;
                }
                let results = [];
                for (const [cat, folderList] of Object.entries(folders)) {
                    folderList.forEach(folder => {
                        if (folder.toLowerCase().includes(query)) {
                            results.push(`${folder} found in ${cat.charAt(0).toUpperCase() + cat.slice(1)}`);
                        }
                    });
                }
                fileList.innerHTML = results.length ? results.map(r => `<div class="file-item">${r}</div>`).join('') : '<p>No folders found.</p>';
                if (noFoldersMsg) noFoldersMsg.style.display = 'none';
            };
        }

        renderFolders();
    }

    function renderFolders() {
        const fileList = document.getElementById('fileList');
        const noFoldersMsg = document.getElementById('noFoldersMsg');
        const folderList = folders[currentCategory];
        if (folderList.length > 0) {
            fileList.innerHTML = folderList.map(folder => `<div class="file-item folder-item">${folder}</div>`).join('');
            if (noFoldersMsg) noFoldersMsg.style.display = 'none';
        } else {
            fileList.innerHTML = '';
            if (noFoldersMsg) noFoldersMsg.style.display = 'block';
        }
    }

    const quizQuestions = [
        { q: 'Which is an absolute path?', opts: ['Documents/report.txt', 'C:\\Users\\John\\report.txt', '../report.txt'], a: 1 },
        { q: 'Which operator finds files starting with "report"?', opts: ['*report*', 'report*', '*.report'], a: 1 },
        { q: 'Where should music files be stored?', opts: ['Documents', 'Images', 'Music'], a: 2 },
        { q: 'What does ".." mean in a path?', opts: ['Current folder', 'Parent folder', 'Root folder'], a: 1 },
        { q: 'Which is a relative path?', opts: ['/home/user/Projects/report.txt', 'Projects/report.txt', 'C:\\report.txt'], a: 1 }
    ];

    function loadQuiz() {
        const area = document.getElementById('quizArea');
        if (!area) return;
        area.innerHTML = '';
        quizQuestions.forEach((qq, idx) => {
            const div = document.createElement('div'); div.className = 'quiz-card';
            div.innerHTML = `<p><strong>Q${idx + 1}:</strong> ${qq.q}</p>`;
            qq.opts.forEach((opt, i) => {
                const btn = document.createElement('button'); btn.innerText = opt;
                btn.onclick = () => {
                    if (i === qq.a) alert('Correct!');
                    else alert('Incorrect!');
                };
                div.appendChild(btn);
            });
            area.appendChild(div);
        });
    }

    showPage('home');
} catch (error) {
    console.error('Error:', error);
}
