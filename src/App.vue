<template>
    <div id="app">
        <Layout>
            <template #left>
                <aside>
                    <SiteAside />
                </aside>
            </template>

            <!-- <div class="main"> -->
            <router-view></router-view>
            <!-- </div> -->
        </Layout>

        <ToTop />
    </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop";
export default {
    components: {
        Layout,
        SiteAside,
        ToTop
    },
    mounted() {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
#app {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
aside {
    width: 250px;
    height: 100vh;
    padding: 0 10px;
    background: @dark;
}
.main {
    width: 100%;
    height: 100%;
}
</style>
