<template>
    <div class="message-area-container">
        <InputArea @submit="handleSubmit" />
        <div class="title" id="commit">{{title + subTitle}}</div>
        <ListsArea :list="list" :isListLoading="isListLoading" />
    </div>
</template>

<script>
import InputArea from "./InputArea";
import ListsArea from "./ListsArea";
export default {
    components: {
        InputArea,
        ListsArea,
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        subTitle: {
            type: String,
            default: ''
        },
        list: {
            type: Array,
            default: () => []
        },
        isListLoading: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        handleSubmit(e, callback) {
            this.$emit('submit', e, callback);
        },
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.message-area-container {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 20px;
    box-sizing: border-box;

    .title {
        margin: 30px 0;
        font-size: 24px;
        font-weight: bold;
        color: @words;
    }
}
</style>