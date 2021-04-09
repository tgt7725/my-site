<template>
    <div class="blog-category-container" v-loading="isLoading">
        <h3>文章分类</h3>
        <NavList v-if="data.length" :lists="categories" @select="handleSelect" />
    </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import { getBlogtype } from "@/api/getBlog";
// import loading from "@/directives/Loading";
import NavList from "../NavList";
export default {
    // directives: {
    //     loading,
    // },
    components: {
        NavList,
    },
    mixins: [fetchData([])],

    computed: {
        categories() {
            const obj = {
                id: -1,
                name: "全部",
                order: -1,
                articleCount: this.data.reduce((a, b) => a + b.articleCount, 0),
            };
            const data = [obj, ...this.data].map((item) => {
                return {
                    ...item,
                    isSelect: item.id === this.info.categoryid,
                    aside: item.articleCount + '篇'
                };
            });
            return data;
        },

        info() {
            return {
                categoryid: +this.$route.params.cateId || -1,
                current: +this.$route.query.page || 1,
                limit: +this.$route.query.limit || 10,
            };
        },
    },

    methods: {
        async fetchData() {
            return await getBlogtype();
        },
        handleSelect(item) {
            const cateId = item.id;
            if(cateId === this.info.categoryid) {
                return;
            }
            const query = {
                page: 1,
                limit: this.info.limit,
            };
            if (cateId !== -1) {
                this.$router.push({
                    name: "BlogCategory",
                    params: {
                        cateId
                    },
                    query,
                });
            } else {
                this.$router.push({
                    name: "Blog",
                    query,
                });
            }
        },
    },

};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-category-container {
    width: 250px;
    height: 100%;
    padding: 20px 30px;
    box-sizing: border-box;
    overflow-y: auto;
    position: relative;
}
</style>