<template>
    <div class="container">
        <Empty />
    </div>
    
</template>

<script>
import Empty from './'
export default {
    components: {
        Empty
    }
}
</script>

<style lang="less" scoped>
.container {
    width: 100px;
    height: 100px;
    border: 1px solid;
    position: relative;
}
</style>