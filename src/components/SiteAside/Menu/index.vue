<template>
    <div class="menu-container">
        <router-link
            v-for="item in menus"
            :key="item.url"
            :to="item.url"
            exact-active-class=""
            active-class="active"
            :exact="item.exact"
        >
            <Icon :type="item.icon" />
            <span class="text">{{ item.title }}</span>
        </router-link>
    </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    components: {
        Icon,
    },
    data() {
        return {
            menus: [
                { icon: "home", title: "首页", url: "/" , exact: true },
                { icon: "blog", title: "文章", url: "/blog", exact: false },
                { icon: "info", title: "关于我", url: "/about", exact: true },
                { icon: "code", title: "项目&效果", url: "/project", exact: true },
                { icon: "chat", title: "留言板", url: "/message", exact: true },
            ],
        };
    },
    methods: {
        // isActive(item) {
        //     if (location.pathname === item.url) {
        //         return true;
        //     } else if (
        //         item.url !== "/" &&
        //         location.pathname.startsWith(item.url)
        //     ) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // },
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.menu-container {
    width: 100%;
    color: @gray;

    a {
        width: 100%;
        height: 45px;
        line-height: 45px;
        display: block;
        padding: 0 10px;
        box-sizing: border-box;
        cursor: pointer;
        font-size: 18px;

        .icon-container {
            margin: 0 10px;
        }

        &.active {
            background: darken(@words, 3%);
            color: #fff;
        }
        &:hover {
            color: #fff;
        }
    }
}
</style>