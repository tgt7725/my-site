import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import {titleControl} from '@/utils'

// Vue.use(VueRouter)
if(!window.VueRouter) {
	Vue.use(VueRouter)
}

const router = new VueRouter({
	routes,
	mode: 'history'
})

router.afterEach((to, from) => {
	titleControl.setTitle1(to.meta.title);
})

export default router