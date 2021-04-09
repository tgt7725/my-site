<template>
    <div class="container">
        <SiteAside 
        />
    </div>
    
</template>

<script>
import SiteAside from './'
export default {
    components: {
        SiteAside
    },
}
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.container {
    width: 200px;
    height: 100vh;
    background: @dark;
}
</style>