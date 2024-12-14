let currentLanguage = 'en';
function updateContent() {

    fetch('assets/contents/main_content.yaml')
        .then(response => response.text())
        .then(yamlText => {
            const data = jsyaml.load(yamlText);
            const content = data[currentLanguage];  // 解构当前语言的数据
            // 定义需要更新的元素及其对应的属性
            const elementsToUpdate = {
                    'subtitle01': 'subtitle01',
                    'languageButton': 'languageButton',
                    'university01': 'university01',
                    'role01': 'role01',
                    'university02': 'university02',
                    'role02': 'role02',
                    'university03': 'university03',
                    'role03': 'role03',
                    'subtitle02': 'subtitle02',
                    'research_interests': 'research_interests',
                    'subtitle03': 'subtitle03',
                    'subtitle03_01': 'subtitle03_01',
                    'page_source_code': 'page_source_code',
                    'downloade_tool':'downloade_tool',
                    'vegetableLeaves_tool': 'vegetableLeaves_tool',
                    'my_blog': 'my_blog',
                    'subtitle03_02': 'subtitle03_02',
                    'subtitle03_02_A': 'subtitle03_02_A',
                    'subtitle03_02_B': 'subtitle03_02_B',
                    'subtitle03_03': 'subtitle03_03',
                    'subtitle04': 'subtitle04'
                };

            // 批量更新DOM
            Object.keys(elementsToUpdate).forEach(elementId => {
                   const field = elementsToUpdate[elementId];
                   if (content[field] !== undefined) {
                           document.getElementById(elementId).innerText = content[field];
                   }
            });

        });
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    updateContent();
}

// 初始内容加载
updateContent();
