<template>
    <div class="container">
        <Layout>
            <template #left>
                <div class="left">左边栏区域，宽度适应内容，溢出隐藏</div>
            </template>
            <div class="center">主区域，宽度占满剩余空间，溢出隐藏</div>
            <template #right>
                <div class="right">右边栏区域，宽度适应内容，溢出隐藏</div>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from "./";
export default {
    components: {
        Layout,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style lang="less" scoped>
.container {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
}
.left {
    width: 200px;
    height: 100%;
    background: red;
}

.center {
    width: 100%;
    height: 100%;
    background: burlywood;
}
.right {
    width: 150px;
    height: 100%;
    background: brown;
}
</style>