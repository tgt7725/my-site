import Vue from 'vue'
/**
 * 根据组件对象和属性信息，得到该组件comp渲染的Dom
 * @param {Component} comp 组件对象
 * @param {Object} props 属性
 * @returns 组件渲染的DOM
 */
export default function (comp, props) {
    const vm = new Vue({
        render: h => h(comp, { props })
    })
    vm.$mount();
    return vm.$el;
}