let title1 = "";
let title2 = "";
/**
 * 设置标题
 */
function setTitle() {
    let title = '';
    if(title1 && title2) {
        title = title1 + '-' + title2;
    }else if(title1 && !title2) {
        title = title1;
    }else if(!title1 && title2) {
        title = title2;
    }else {
        title = 'loading……'
    }
    document.querySelector('title').innerHTML = title;
}
export default {
    setTitle1(title) {
        title1 = title;
        setTitle();
    },

    setTitle2(title) {
        title2 = title;
        setTitle();
    }
}