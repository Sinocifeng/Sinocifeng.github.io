let currentLanguage = 'en';
function updateContent() {

    fetch('assets/contents/main_content.yaml')
        .then(response => response.text())
        .then(yamlText => {
            const data = jsyaml.load(yamlText);

            document.getElementById('subtitle01').innerText = data[currentLanguage].subtitle01;
            document.getElementById('languageButton').innerText = data[currentLanguage].languageButton;
            document.getElementById('university01').innerText = data[currentLanguage].university01;
            document.getElementById('role01').innerText = data[currentLanguage].role01;
            document.getElementById('university02').innerText = data[currentLanguage].university02;
            document.getElementById('role02').innerText = data[currentLanguage].role02;
            document.getElementById('university03').innerText = data[currentLanguage].university03;
            document.getElementById('role03').innerText = data[currentLanguage].role03;

            document.getElementById('subtitle02').innerText = data[currentLanguage].subtitle02;
            document.getElementById('research_interests').innerText = data[currentLanguage].research_interests;

            document.getElementById('subtitle03').innerText = data[currentLanguage].subtitle03;
            document.getElementById('subtitle03_01').innerText = data[currentLanguage].subtitle03_01;
            document.getElementById('page_source_code').innerText = data[currentLanguage].page_source_code;
            document.getElementById('subtitle03_02').innerText = data[currentLanguage].subtitle03_02;
            document.getElementById('subtitle03_02_A').innerText = data[currentLanguage].subtitle03_02_A;
            document.getElementById('subtitle03_02_B').innerText = data[currentLanguage].subtitle03_02_B;
            document.getElementById('subtitle03_03').innerText = data[currentLanguage].subtitle03_03;

            document.getElementById('subtitle04').innerText = data[currentLanguage].subtitle04;
        });
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    updateContent();
}

// 初始内容加载
updateContent();
