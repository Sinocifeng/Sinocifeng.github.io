let currentLanguage = 'en';
let languageData = null;

async function loadLanguageData() {
    if (languageData) {
        return languageData;
    }

    try {
        const response = await fetch('assets/contents/main_content.yaml');
        const yamlText = await response.text();
        languageData = jsyaml.load(yamlText);
        return languageData;
    } catch (error) {
        console.error('加载语言文件失败:', error);
        return null;
    }
}

async function updateContent() {
    const data = await loadLanguageData();
    if (!data || !data[currentLanguage]) {
        console.error('语言数据不存在');
        return;
    }

    const content = data[currentLanguage];

    const keys = [
        'office', 'loc_1', 'loc_2', 'loc_3', 'loc_4', 'subtitle01', 'languageButton', 'university01', 'role01',
        'university03', 'role03', 'university04', 'role04', 'subtitle02', 'research_interests', 'join_us',
        'subtitle03_01', 'subtitle03_02', 'subtitle03_03', 'subtitle04'
    ];

    keys.forEach(key => {
        const element = document.getElementById(key);
        if (element && content[key] !== undefined) {
            element.innerText = content[key];
        }
    });
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    updateContent();
}

document.addEventListener('DOMContentLoaded', () => {
    loadLanguageData().then(() => {
        updateContent();
    });
});
