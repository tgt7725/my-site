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
.empty-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: @gray;

    .text {
        margin-top: 10px;
    }
}
</style>