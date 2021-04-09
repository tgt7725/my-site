<template>
    <div class="message-container" ref="messageContainer">
        <MessageArea
            title="留言板"
            :subTitle="`(${data.total})`"
            :list="data.rows"
            :isListLoading="isLoading"
            @submit="handleSubmit"
        />
    </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import scroll from "@/mixins/scroll";
import { getMessage, addMessage } from "@/api/getMessage";


export default {
    components: {
        MessageArea
    },

    data() {
        return {
            page: 1, 
            limit: 10,
            // isLoading: true
        }
    },

    mixins: [fetchData({ total: 0, rows: [] }), scroll('messageContainer')],

    created() {
        this.$bus.$on('mainScroll', this.handleScroll);
    },

    destoryed() {
        this.$bus.$off('mainScroll', this.handleScroll);
    },

    methods: {
        async fetchData() {
            return await getMessage(this.page, this.limit);
        },

        async fetchMoreData() {
            if(this.isLoading || this.data.rows.length >= this.data.total) {
                return;
            }
            this.page++;
            this.isLoading = true;
            const resp = await this.fetchData();
            this.data.rows = this.data.rows.concat(resp.rows);
            this.data.total = resp.total;
            this.isLoading = false;
        },

        handleScroll(dom) {
            if(!dom || this.isLoading || dom.scrollTop + dom.clientHeight < dom.scrollHeight - 100) {
                return;
            }
            this.fetchMoreData();
        },

        async handleSubmit(e, callback) {
            this.isLoading = true;
            const resp = await addMessage({
                nickname: e.nickname,
                content: e.content
            });
            this.data.rows.unshift(resp);
            this.data.total++;
            callback("提交成功");
            this.isLoading = false;
        },
    },
};
</script>

<style lang="less" scoped>
.message-container {
    width: 100%;
    height: 100%;
    padding: 0 50px;
    box-sizing: border-box;
    position: relative;
    overflow-y: scroll;
    scroll-behavior: smooth;

}
</style>