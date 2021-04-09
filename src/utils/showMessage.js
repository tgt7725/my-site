import getComponentRootDom from './getComponentRootDom'
import Icon from '@/components/Icon'
import styles from './css/showMessage.module.less'

/**
 * 消息弹框函数
 * @param {String} message 消息框的信息
 * @param {String} type 消息框的类型，info、success、error、warn
 * @param {Number} duration 消息框消失的间隔时间
 * @param {HTMLElement} container 消息框呈现的容器
 * @param {Function} callback 消息框隐藏时的回调函数
 */
export default function ({message = '', type = 'info', container = document.body, duration = 2000, callback = () => { }}) {
    const div = document.createElement('div');
    const icon = getComponentRootDom(Icon, {
        type
    });
    if(getComputedStyle(container).position === 'static') {
        container.style.position = 'relative';
    }
    div.innerHTML = `<span class="${styles.icon}">${icon.outerHTML}</span><div>${message}</div>`;
    div.className = `${styles.message} ${styles["message-" + type]}`;
    container.appendChild(div);
    
    div.clientHeight; // 强行渲染，导致重排
    div.style.transform = 'translate(-50%, -50%)';
    div.style.opacity = 1;
    setTimeout(() => {
        div.style.transform = 'translate(-50%, -50%) translateY(-50px)';
        div.style.opacity = 0;
        div.addEventListener('transitionend', () => {
            div.remove();
            callback();
        }, {once: true})
    }, duration)
}