<template>
    <div class="empty-container">
        <Icon type="empty" />
        <div class="text">{{text}}</div>
    </div>
</template>

<script>
import Icon from '../Icon'
export default {
    components: {
        Icon
    },
    props: {
        text: {
            type: String,
            default: '无数据'
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';
@import '~@/styles/mixin.less';
.empty-container {
    .self-center();
    text-align: center;
    color: @gray;

    .iconfont {
        font-size: 40px;
        display: block;
        margin-bottom: 5px;
    }
}
</style>