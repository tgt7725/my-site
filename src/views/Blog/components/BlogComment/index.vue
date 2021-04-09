<template>
    <div class="blog-comment-container">
        <MessageArea
            title="评论列表"
            :subTitle="`(${data.total})`"
            :list="data.rows"
            :isListLoading="isListLoading"
            @submit="handleSubmit"
        />
    </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComment, addComment } from "@/api/getBlog";

export default {
    components: { MessageArea },
    mixins: [fetchData({ total: "0", rows: [] })],
    data() {
        return {
            isListLoading: true,
            page: 1,
            limit: 10,
        };
    },

    mounted() {
        this.$bus.$on('mainScroll', this.handleScroll);
    },

    beforeDestroy() {
        this.$bus.$off('mainScroll', this.handleScroll);
    },

    methods: {
        async fetchData() {
            this.isListLoading = true;
            const result = await getComment(
                this.page,
                this.limit,
                this.$route.params.detailId
            );
            this.isListLoading = false;
            return result;
        },

        async fetchMoreData(){
            if(this.data.rows.length >= this.data.total) {
                return;
            }
            this.page += 1;
            const resp = await this.fetchData();
            this.data.rows = this.data.rows.concat(resp.rows);
            this.data.total = resp.total;
        },

        async handleSubmit(e, callback) {
            this.isListLoading = true;
            const resp = await addComment({
                nickname: e.nickname,
                content: e.content,
                blogId: this.$route.params.detailId,
            });
            this.data.rows.unshift(resp);
            this.data.total++;
            callback("提交成功");
            this.isListLoading = false;
        },

        handleScroll(dom) {
            if(!dom || this.isListLoading || dom.scrollTop + dom.clientHeight < dom.scrollHeight - 100) {
                return;
            }
            this.fetchMoreData();
        }
    },
};
</script>

<style>
</style>