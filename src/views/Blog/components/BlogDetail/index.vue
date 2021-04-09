<template>
    <div class="blog-detail-container" v-loading="isLoading">
        <Layout>
            <div class="main" ref="detailContainer">
                <BlogContent :data="data" v-if="!isLoading" />
                <BlogComment v-if="!isLoading" />
            </div>

            <template #right>
                <BlogToc :lists="data.toc" v-if="!isLoading" />
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogContent from "../BlogContent";
import BlogToc from "../BlogTOC";
import BlogComment from "../BlogComment";
import fetchData from "@/mixins/fetchData.js";
import scroll from "@/mixins/scroll.js";
import { getBlogById } from "@/api/getBlog";
import { titleControl } from "@/utils";
export default {
    components: {
        Layout,
        BlogToc,
        BlogContent,
        BlogComment,
    },

    mixins: [fetchData(), scroll("detailContainer")],

    // mounted() {
    //     this.handleScroll = () => {
    //         this.$bus.$emit('mainScroll', this.$refs.detailContainer);
    //     };
    //     this.$refs.detailContainer.addEventListener(
    //         "scroll",
    //         this.handleScroll
    //     );
    //     this.$bus.$on('setScroll', this.handleSetScroll);
    // },

    // beforeDestroy() {
    //     this.$refs.detailContainer.removeEventListener(
    //         "scroll",
    //         this.handleScroll
    //     );
    //     this.$bus.$emit('mainScroll', this.$refs.detailContainer)
    //     this.$bus.$off('setScroll', this.handleSetScroll);
    // },

    computed: {
        detailId() {
            return this.$route.params.detailId;
        },
    },
    methods: {
        async fetchData() {
            const resp = await getBlogById(this.detailId);
            if(!resp) {
                this.$router.push('/404');
                return;
            }
            document.querySelector("title").innerHTML = resp.title;
            return resp;
        },

        // handleSetScroll(value) {
        //     this.$refs.detailContainer.scrollTop = value;
        // }
    },

    updated() {
        const hash = this.$route.hash;
        location.hash = "";
        setTimeout(() => {
            location.hash = hash;
        }, 50);
    },
};
</script>

<style lang="less" scoped>
.blog-detail-container {
    width: 100%;
    height: 100%;
    position: relative;

    .main {
        width: 100%;
        height: 100%;
        position: relative;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
}
</style>