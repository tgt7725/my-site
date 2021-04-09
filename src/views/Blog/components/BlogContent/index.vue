<template>
    <div class="blog-content-container">
        <h1>{{ data.title }}</h1>
        <div class="info">
            <span>日期：{{ formatTime(+data.createDate) }}</span>
            <span>浏览：{{ data.scanNumber }}</span>
            <span
                ><a href="#commit" class="cate">评论：{{ data.commentNumber }}</a></span
            >
            <span
                ><router-link :to="{
                    name: 'BlogCategory',
                    params: {
                        cateId: data.category.id
                    }
                }" class="cate">分类： {{ data.category.id }}</router-link></span
            >
        </div>
        <div class="markdown-body" v-html="data.htmlContent"></div>
    </div>
</template>

<script>
import { formatTime } from "@/utils";
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
export default {
    props: ["data"],
    
    methods: {
        formatTime,
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.blog-content-container {
    width: 100%;
    // height: 100%;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    // overflow-y: auto;
    // scroll-behavior: smooth;

    .info {
        margin: 5px;
        height: 30px;
        font-size: 12px;
        color: @gray;
        span {
            margin-right: 10px;
        }
        .cate {
            cursor: pointer;
        }
    }
}
</style>