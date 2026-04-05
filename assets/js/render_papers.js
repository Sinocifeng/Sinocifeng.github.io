// 渲染论文、项目和专利列表
async function renderAchievements() {
    try {
        const response = await fetch('assets/contents/papers.yaml');
        if (!response.ok) {
            throw new Error('无法加载论文数据文件');
        }

        const yamlText = await response.text();
        const data = jsyaml.load(yamlText);

        // 渲染论文
        renderPapers(data.papers);

        // 渲染项目
        renderProjects(data.projects);

        // 渲染专利
        renderPatents(data.patents);

    } catch (error) {
        console.error('加载成就数据失败:', error);
    }
}

// 渲染论文列表
function renderPapers(papers) {
    const papersList = document.getElementById('papers-list');
    if (!papersList || !papers) return;

    papersList.innerHTML = papers.map(paper => {
        const authorsHtml = formatAuthors(paper.authors);
        const noteHtml = paper.note ?
            `<br><a class="introduction_text">(${paper.note})</a>` : '';

        return `
            <li>
                <a class="custom-link" href="${paper.url}" target="_blank" rel="noopener noreferrer">
                    ${paper.title}
                </a><br>
                ${authorsHtml}
                <span class="paper-journal">${paper.journal}</span>., In Press.
                ${noteHtml}
            </li>
        `;
    }).join('');
}

// 渲染项目列表
function renderProjects(projects) {
    const projectsList = document.getElementById('projects-list');
    if (!projectsList || !projects) return;

    projectsList.innerHTML = projects.map(project => `
        <li>
            <a class="custom-link">${project.title}</a><br>
            ${project.info}
        </li>
    `).join('');
}

// 渲染专利列表
function renderPatents(patents) {
    const patentsList = document.getElementById('patents-list');
    if (!patentsList || !patents) return;

    patentsList.innerHTML = patents.map(patent => {
        const authorsHtml = formatAuthors(patent.authors);

        return `
            <li>
                <a class="custom-link" href="${patent.url}" target="_blank" rel="noopener noreferrer">
                    ${patent.title}
                </a><br>
                ${authorsHtml}
                <span class="paper-journal">${patent.patent_no}</span>., ${patent.status}.
                <br>
            </li>
        `;
    }).join('');
}

// 格式化作者列表
function formatAuthors(authors) {
    if (!authors || authors.length === 0) return '';

    return authors.map((author, index) => {
        const name = author.name;
        const separator = index < authors.length - 1 ? ', ' : '';

        if (author.highlight) {
            return `<span class="paper-author">${name}</span>${separator}`;
        }
        return `${name}${separator}`;
    }).join('');
}

// 页面加载完成后渲染
document.addEventListener('DOMContentLoaded', renderAchievements);
