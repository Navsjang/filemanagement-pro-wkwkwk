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
<p>It tells the computer EXACTLY where the file lives, no matter where you are currently located.</p>
<h4>🏠 Real-life analogy</h4>
<p>It’s like giving someone your FULL home address:</p>
<p>“Block 23, Street 5, Brgy. XYZ, City ABC”</p>
<p>→ Anyone can find it no matter where they are.</p>
<h4>💻 Computer example</h4>
<p><strong>Windows:</strong></p>
<pre>C:\\Users\\John\\Documents\\School\\notes.txt</pre>
<p><strong>Mac/Linux:</strong></p>
<pre>/Users/john/Documents/School/notes.txt</pre>
<h4>⭐ Key points</h4>
<ul>
<li>Always starts from root folder (C:\\ or /)</li>
<li>Works everywhere, always correct</li>
<li>Long but exact</li>
</ul>

<h3>📁 2. What is a Relative Path?</h3>
<p>Relative Path = location of a file based on where you are NOW.</p>
<p>It depends on your current folder.</p>
<h4>🏠 Real-life analogy</h4>
<p>Instead of a full address, you say:</p>
<p>“Go three houses to the left.”</p>
<p>It only works if the person knows where you are standing.</p>
<h4>💻 Computer example</h4>
<p>If you're already inside the School folder:</p>
<pre>notes.txt</pre>
<p>Or:</p>
<pre>../Pictures/photo.png</pre>
<p>(".." means go up one folder)</p>
<h4>⭐ Key points</h4>
<ul>
<li>Shorter</li>
<li>Depends on the current working directory</li>
<li>Used in coding projects and web development</li>
</ul>

<h3>🔍 3. Quick Comparison</h3>
<table>
<tr><th>Feature</th><th>Absolute Path</th><th>Relative Path</th></tr>
<tr><td>Starts from root?</td><td>✅ Yes</td><td>❌ No</td></tr>
<tr><td>Works anywhere?</td><td>✅ Always</td><td>❌ Depends on your location</td></tr>
<tr><td>Shorter?</td><td>❌ Usually long</td><td>✅ Short</td></tr>
<tr><td>Best for?</td><td>System tasks</td><td>Projects & teamwork</td></tr>
</table>

<h3>🧠 4. Very Simple Example</h3>
<p>Let’s say your folder looks like this:</p>
<pre>C:\\Users\\John\\Projects\\FileManagement\\
    report.txt</pre>
<p><strong>Absolute path:</strong></p>
<pre>C:\\Users\\John\\Projects\\FileManagement\\report.txt</pre>
<p><strong>Relative path (if you're inside "FileManagement"):</strong></p>
<pre>report.txt</pre>
<p><strong>Relative path (if you're inside "Projects"):</strong></p>
<pre>FileManagement/report.txt</pre>

<h3>📁 Current Folder, Parent Folder, and Root Folder (Explained Simply)</h3>
<h4>1. 📂 Current Folder (Working Directory)</h4>
<p>This is the folder you are currently using or viewing.</p>
<p>It’s where your files open from, where commands run, and where new files are saved unless you choose a different location.</p>
<p><strong>Example:</strong></p>
<p>If you are inside:</p>
<pre>C:\\Users\\John\\Documents\\Projects</pre>
<p>Then your current folder is:</p>
<pre>Projects</pre>

<h4>2. 📁 Parent Folder</h4>
<p>This is the folder that contains your current folder.</p>
<p>It is one level above the current folder.</p>
<p><strong>Example:</strong></p>
<p>If the current folder is:</p>
<pre>C:\\Users\\John\\Documents\\Projects</pre>
<p>Then the parent folder is:</p>
<pre>Documents</pre>
<p>Because "Projects" is inside "Documents".</p>
<p>In computer paths, the parent folder is usually represented as:</p>
<pre>..</pre>

<h4>3. 🗂️ Root Folder</h4>
<p>This is the top-most folder in a file system.</p>
<p>All other folders come from it.</p>
<p>It has no parent folder.</p>
<p><strong>Windows Example:</strong></p>
<pre>C:\\
D:\\</pre>
<p>(C: is the root of the C drive)</p>
<p><strong>Mac/Linux Example:</strong></p>
<pre>/</pre>
<p>This is the root directory.</p>

<h3>📘 Example Folder Path Breakdown</h3>
<p>Let’s analyze this full path:</p>
<pre>C:\\Users\\John\\Documents\\Projects\\File1.txt</pre>
<table>
<tr><th>Part</th><th>Meaning</th></tr>
<tr><td>C:\\</td><td>Root folder</td></tr>
<tr><td>Users</td><td>Folder inside root</td></tr>
<tr><td>John</td><td>Folder inside Users</td></tr>
<tr><td>Documents</td><td>Parent folder of Projects</td></tr>
<tr><td>Projects</td><td>Current folder (if you are inside it)</td></tr>
<tr><td>File1.txt</td><td>File inside current folder</td></tr>
</table>

<h3>Visual Aids</h3>
<img src="assets/images/abs_rel_diagram.png" alt="Absolute vs Relative Diagram" style="max-width:100%;border-radius:8px;margin-bottom:8px;" onerror="this.style.display='none';">
<img src="assets/images/abs_step_text.png" alt="Absolute Path Steps" style="max-width:100%;border-radius:8px;margin-bottom:8px;" onerror="this.style.display='none';">
<img src="assets/images/analogy_barangay.png" alt="Analogy Diagram" style="max-width:100%;border-radius:8px;margin-bottom:8px;" onerror="this.style.display='none';">
`
        },
        "search": {
            "title": "Use Search Operators and Saved Searches",
            "content": `
<h3>🔍 What is “Use Search Operators and Saved Searches”?</h3>
<p>This topic teaches you how to search smarter, not harder.</p>
<p>In computers, especially Windows/macOS, the Search bar can do more than just type a filename.</p>
<p>You can use search operators (special keywords, symbols, or filters) to find files faster and more accurately.</p>
<p>You can also save these searches for later — this is called a saved search.</p>

<h3>🧠 1. What Are Search Operators?</h3>
<p>Search operators are short commands you add to your search to filter files by:</p>
<ul>
<li>File type</li>
<li>Date modified</li>
<li>Size</li>
<li>Keywords inside documents</li>
<li>File properties (author, tag, folder, etc.)</li>
</ul>
<p>Think of them like advanced Google search, but inside your computer.</p>

<h3>🔎 Common Search Operators (Windows example)</h3>
<table>
<tr><th>What You Want</th><th>Search Operator</th><th>Example</th></tr>
<tr><td>Files with a specific extension</td><td>*.ext</td><td>*.txt, *.pptx</td></tr>
<tr><td>Files modified today</td><td>datemodified:today</td><td></td></tr>
<tr><td>Files modified this week</td><td>datemodified:this week</td><td></td></tr>
<tr><td>Files larger than 50MB</td><td>size:>50MB</td><td></td></tr>
<tr><td>Files smaller than 1MB</td><td>size:<1MB</td><td></td></tr>
<tr><td>Search inside text of files</td><td>content:</td><td>content:report</td></tr>
<tr><td>Files with a specific name</td><td>name:</td><td>name:project</td></tr>
</table>

<h3>⭐ Examples</h3>
<p><strong>Example 1: Find all PDF files</strong></p>
<pre>*.pdf</pre>
<p><strong>Example 2: Find files modified this month</strong></p>
<pre>datemodified:this month</pre>
<p><strong>Example 3: Find files that contain the word "budget"</strong></p>
<pre>content:budget</pre>
<p><strong>Example 4: Find images larger than 5MB</strong></p>
<pre>size:>5MB type:=picture</pre>

<h3>💾 2. What Are Saved Searches?</h3>
<p>After using a search operator, you can save that search so you don’t have to redo it every time.</p>
<h4>📌 How to save a search (Windows)</h4>
<ul>
<li>Open File Explorer</li>
<li>Type your search (example: *.docx datemodified:this week)</li>
<li>Go to the top toolbar → Save search</li>
<li>Name it (e.g., Recent Word Files)</li>
<li>It appears in your Searches folder</li>
</ul>
<p>Now every time you click your saved search, Windows automatically updates and shows matching files.</p>

<h3>🧰 Why It’s Important in File Management</h3>
<table>
<tr><th>Benefit</th><th>Explanation</th></tr>
<tr><td>Saves time</td><td>No need to browse folders manually</td></tr>
<tr><td>Helps organize large folders</td><td>Easily locate specific file types or dates</td></tr>
<tr><td>Avoids losing files</td><td>Quickly retrieves misplaced documents</td></tr>
<tr><td>Professional skill</td><td>Used in IT, offices, programming environments</td></tr>
</table>

<h3>🖼 Simple Analogy</h3>
<p>Using search operators is like going to a mall information desk and saying:</p>
<p>"Show me all stores that sell shoes, on the 2nd floor, open today."</p>
<p>— instead of walking around every floor trying to find them.</p>
<p>Saved searches are like:</p>
<p>"Save this request so next week I can check again instantly."</p>
`
        },
        "organize": {
            "title": "Organize with System Folders Appropriately",
            "content": `
<h3>📂 What Is “Organize with System Folders Appropriately”?</h3>
<p>This principle means using the built-in folders your operating system already provides to keep your files clean, easy to find, and well-managed.</p>
<p>Instead of saving everything on the Desktop or Downloads, system folders help you:</p>
<ul>
<li>Avoid clutter</li>
<li>Retrieve files faster</li>
<li>Maintain a clear structure</li>
<li>Prevent losing important documents</li>
<li>Improve efficiency in school, office, or projects</li>
</ul>

<h3>🗂 Why System Folders Matter</h3>
<p>Every computer has default folders designed for specific file types:</p>
<table>
<tr><th>Folder</th><th>Purpose</th></tr>
<tr><td>Documents</td><td>Word files, reports, projects</td></tr>
<tr><td>Pictures</td><td>Images, screenshots, camera imports</td></tr>
<tr><td>Videos</td><td>Movie files, screen recordings</td></tr>
<tr><td>Music</td><td>Audio files</td></tr>
<tr><td>Downloads</td><td>Temporary files you download from the internet</td></tr>
<tr><td>Desktop</td><td>Quick-access items, NOT storage</td></tr>
<tr><td>AppData / Library</td><td>System settings for apps (don’t touch)</td></tr>
</table>

<h3>📁 Correct Way to Organize Files</h3>
<h4>✔️ 1. Store files in the right folder</h4>
<p><strong>Example:</strong></p>
<ul>
<li>Essays → Documents</li>
<li>Photos → Pictures</li>
<li>MP3 files → Music</li>
<li>Videos → Videos</li>
</ul>
<p>This reduces confusion and keeps everything predictable.</p>
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
        { q: 'What does ".." mean in a path?', opts: ['Current folder', 'Parent folder', 'Root folder'], a

    showPage('home');
} catch (error) {
    console.error('Error:', error);

}
