<template>
    <div class="blog-list-container" ref="container" v-loading="isLoading">
        <Empty text="暂无文章数据" v-if="data.total === 0 && !isLoading" />
        <div class="list-container" v-for="item in data.rows" :key="item.id">
            <router-link :to="{name: 'BlogDetail', params:{detailId: item.id}}" class="img-container" v-if="item.thumb">
                <img
                    v-lazy="item.thumb"
                    :title="item.title"
                    :alt="item.title"
                />
            </router-link>
            <div class="content-container">
                <router-link :to="{name: 'BlogDetail', params:{detailId: item.id}}" class="title">{{item.title}}</router-link>
                <div class="info">
                    <span>日期：{{formatTime(+item.createDate)}}</span>
                    <span>浏览：{{item.scanNumber}}</span>
                    <span>评论：{{item.commentNumber}}</span>
                    <span><a class="cate">分类： {{item.category.id}}</a></span>
                </div>
                <div class="content">
                    {{item.description}}
                </div>
            </div>
        </div>
        <Pager
            v-if="info.total"
            :current="info.current"
            :total="info.total"
            :limit="info.limit"
            @changePage="handlePageChange($event)"
        />
    </div>
</template>

<script>
import {formatTime} from '@/utils'
import fetchData from "@/mixins/fetchData.js";
import scroll from "@/mixins/scroll.js";
import { getBlog } from "@/api/getBlog";
// import loading from "@/directives/Loading";
import Pager from "@/components/Pager";
import Empty from '@/components/Empty'
export default {
    // directives: {
    //     loading,
    // },
    components: {
        Pager,
        Empty
    },
    mixins: [fetchData([]), scroll('container')],
    // mounted() {
    //     this.handleScroll = () => {
    //         this.$bus.$emit('mainScroll', this.$refs.container);
    //     };
    //     this.$refs.container.addEventListener(
    //         "scroll",
    //         this.handleScroll
    //     );
    //     this.$bus.$on('setScroll', this.handleSetScroll);
    // },

    // beforeDestroy() {
    //     this.$refs.container.removeEventListener(
    //         "scroll",
    //         this.handleScroll
    //     );
    //     this.$bus.$emit('mainScroll', this.$refs.container)
    //     this.$bus.$off('setScroll', this.handleSetScroll);
    // },
    computed: {
        info() {
            return {
                categoryid: +this.$route.params.cateId || -1,
                current: +this.$route.query.page || 1,
                total: +this.data.total || 0,
                limit: +this.$route.query.limit || 10
            }
        }
    },

    methods: {
        formatTime,
        async fetchData() {
            return await getBlog(this.info.current, this.info.limit, this.info.categoryid);
        },

        handlePageChange(newPage) {
            const query = {
                page: newPage,
                limit: this.info.limit
            }
            if(this.info.categoryid === -1) {
                // this.$router.push(`/blog?page=${newPage}&limit=${this.info.limit}`) 
                this.$router.push({
                    name: 'Blog',
                    query
                })
            }else {
                // this.$router.push(`/blog/cate/${this.info.categoryid}?page=${newPage}&limit=${this.info.limit}`) 
                this.$router.push({
                    name: 'BlogCategory',
                    params: {
                        cateId: this.info.categoryid
                    },
                    query
                })
            }
        },

        //  handleSetScroll(value) {
        //     this.$refs.container.scrollTop = value;
        // }
    },

    watch: {
        async $route() {
            this.$refs.container.scrollTop = 0;
            this.isLoading = true;
            this.data = await this.fetchData();
            this.isLoading = false;
        },
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/global.less";
.blog-list-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
    scroll-behavior: smooth;

    .list-container {
        width: 100%;
        padding: 20px;
        position: relative;
        box-sizing: border-box;
        border-bottom: 1px solid @gray;
        display: flex;

        .img-container {
            width: 200px;
            height: 150px;
            margin-right: 20px;
            display: block;
            flex: 0 0 auto;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .title {
            font-size: 24px;
            line-height: 30px;
            height: 30px;
            font-weight: bold;
            color: darken(@gray, 40%);
            &:hover {
                color: @primary;
            }
        }

        .info {
            margin: 5px 0;
            font-size: 12px;
            color: @gray;
            span {
                margin-right: 10px;
            }
            .cate {
                cursor: pointer;
            }
        }

        .content {
            font-size: 16px;
            color: @words;
            margin-top: 10px;
        }
    }
}
</style>