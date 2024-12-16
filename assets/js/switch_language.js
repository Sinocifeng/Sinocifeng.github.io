let currentLanguage = 'zh';
function updateContent() {

    fetch('assets/contents/main_content.yaml')
        .then(response => response.text())
        .then(yamlText => {
            const data = jsyaml.load(yamlText);
            const content = data[currentLanguage];  // 解构当前语言的数据
            // 定义需要更新的元素及其对应的属性
            const keys = [
                'subtitle01', 'languageButton', 'university01', 'role01', 'university02',
                'role02', 'university03', 'role03', 'subtitle02', 'research_interests',
                'subtitle03', 'subtitle03_01', 'page_source_code', 'downloade_tool',
                'vegetableLeaves_tool', 'my_blog', 'subtitle03_02', 'subtitle03_02_A',
                'subtitle03_02_B', 'subtitle03_03', 'subtitle04'
            ];

            const elementsToUpdate = Object.fromEntries(keys.map(key => [key, key]));


            // 批量更新DOM
            Object.keys(elementsToUpdate).forEach(elementId => {
                const field = elementsToUpdate[elementId];
                // 先检查元素是否存在
                const element = document.getElementById(elementId);
                if (element && content[field] !== undefined) {
                    element.innerText = content[field];
                    console.log(content[field]);
                } else {
                    console.log(`元素 ${elementId} 不存在或内容为空，跳过更新。`);
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
