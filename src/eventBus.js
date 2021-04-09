// const eventBus = {};

// export default {
//     // 添加监听事件
//     $on(eventName, handler) {
//         if(!eventBus[eventName]) {
//             eventBus[eventName] = new Set();
//         }
//         eventBus[eventName].add(handler);
//     },

//     // 移除事件监听
//     $off(eventName, handler) {
//         if(!eventBus[eventName]) {
//             return;
//         }
//         eventBus[eventName].delete(handler);
//     },

//     // 触发监听事件
//     $emit(eventName, ...arg) {
//         if(!eventBus[eventName]) {
//             return;
//         }
//         for (const handler of eventBus[eventName]) {
//             handle(...arg);            
//         }
//     }
// }

import Vue from 'vue'
const obj = new Vue({});
Vue.prototype.$bus = obj;
export default obj;