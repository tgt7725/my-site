// export default {
//     bind(el, binding) {
//         // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
//     },

//     inserted(el, binding) {
//         // 被绑定元素插入父节点时调用(真实的DOM操作)
//     },

//     update(el, binding) {
//         // 所在组件的 VNode 更新时调用
//     }
// }

import src from '@/assets/loading.svg'
import style from './loading.module.less'

function createImg() {
    const img = document.createElement('img');
    img.src = src;
    img.dataset.loading = true;
    img.className = style.loading;
    return img;
}

// bind和update两个钩子函数功能大致相同，可作以下的简化
export default function (el, binding) {
    const curImg = el.querySelector('img[data-loading]')
    // 正在加载
    if (binding.value) {
        if (!curImg) {
            const img = createImg();
            el.appendChild(img);
        }
    }
    // 加载完毕
    else {
        curImg && curImg.remove();
    }
}