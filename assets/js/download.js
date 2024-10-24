document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    const h2Elements = content.querySelectorAll('h2');
    const directory = document.querySelector('.directory');
    let directoryHTML = '<h3>目录</h3><ul>';

    h2Elements.forEach(h2 => {
        directoryHTML += `<li>${h2.innerText}<ul>`;

        // 查找对应的h3，考虑h3在div中
        let nextElement = h2.nextElementSibling;
        while (nextElement) {
            if (nextElement.tagName === 'H2') {
                break; // 遇到下一个 h2，停止
            }
            if (nextElement.tagName === 'DIV') {
                const h3sInDiv = nextElement.querySelectorAll('h3');
                h3sInDiv.forEach(h3 => {
                    directoryHTML += `<li>${h3.innerText}</li>`;
                });
            }
            nextElement = nextElement.nextElementSibling; // 移动到下一个兄弟元素
        }

        directoryHTML += '</ul></li>'; // 关闭h2的ul
    });

    directoryHTML += '</ul>';
    directory.innerHTML = directoryHTML;
});
