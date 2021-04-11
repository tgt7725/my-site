import 'nprogress/nprogress.css';
import { start, done, configure } from "nprogress";

configure({
    trickleSpeed: 20,
    showSpinner: false,
});

function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

function getPageComponent(pageCompResolver) {
    return async () => {
        start();
        if (process.env.NODE_ENV === "development") {
            await delay(2000);
        }
        const comp = await pageCompResolver();
        done();
        return comp;
    };
}

export default [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: '首页'
        },
        // component: () => import(/* webpackChunkName: "home" */ "@/views/Home")
        component: getPageComponent(() => import(/* webpackChunkName: "home" */ "@/views/Home"))
    },
    {
        path: '/index.html',
        name: 'Home',
        meta: {
            title: '首页'
        },
        // component: () => import(/* webpackChunkName: "home" */ "@/views/Home")
        component: getPageComponent(() => import(/* webpackChunkName: "home" */ "@/views/Home"))
    },
    {
        path: '/blog',
        name: 'Blog',
        meta: {
            title: '文章'
        },
        component: getPageComponent(() => import(/* webpackChunkName: "blog" */ "@/views/Blog"))
    },
    {
        path: '/blog/cate/:cateId',
        name: 'BlogCategory',
        meta: {
            title: '文章'
        },
        component: getPageComponent(() => import(/* webpackChunkName: "blog" */ "@/views/Blog"))
    },
    {
        path: '/blog/:detailId',
        name: 'BlogDetail',
        meta: {
            title: '文章详情'
        },
        component: getPageComponent(() => import(/* webpackChunkName: "blog" */ "@/views/Blog/components/BlogDetail"))
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: '关于我'
        },
        component: getPageComponent(() => import(/* webpackChunkName: "about" */ "@/views/About"))
    },
    {
        path: '/project',
        name: 'Project',
        meta: {
            title: '项目&效果'
        },
        component: getPageComponent(() => import(/* webpackChunkName: "project" */ "@/views/Project"))
    },
    {
        path: '/message',
        name: 'Message',
        meta: {
            title: '留言板'
        },
        component: getPageComponent(() => import(/* webpackChunkName: "message" */ "@/views/Message"))
    },
    {
        path: '*',
        name: 'NotFound',
        component: getPageComponent(() => import(/* webpackChunkName: "home" */ "@/views/NotFound"))
    },
]