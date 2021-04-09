import event from '@/eventBus'
import {debounce} from '@/utils'
import gif from '@/assets/loading.gif'
let imgs = [];

function setImage(img) {
    img.dom.src = gif;
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const top = rect.top;
    const height = rect.height;
    if(top >= -height && top <= clientHeight) {
        const tempImg = new Image();
        tempImg.onload = function() {
            img.dom.src = img.src;
        }
        tempImg.src = img.src;
        imgs = imgs.filter(i => i !== img);
    }
}

function setImages() {
    for (const img of imgs) {
        setImage(img);
    }
}

event.$on('mainScroll', debounce(setImages));

export default {
    inserted(el, binding){
        const img = {
            dom: el,
            src: binding.value,
        }
        imgs.push(img);
        setImage(img);
    },

    unbind (el) {
        imgs = imgs.filter(i => i.dom !== el);
    },
}