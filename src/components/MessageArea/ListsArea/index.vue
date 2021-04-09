<template>
    <div class="list-area-container">
        <Empty text="客官，这里空空如也哦！" v-if="list.length === 0 && !isListLoading" />
        <ul>
            <li v-for="item in list" :key="item.id">
                <Avatar
                    :size="44"
                    :url="item.avatar"
                />
                <div class="content-container">
                    <div class="top">
                        <div class="nickname">{{ item.nickname }}</div>
                        <div class="time">{{formatTime(+item.createDate)}}</div>
                    </div>
                    <div class="content">
                        {{ item.content }}
                    </div>
                </div>
            </li>
        </ul>
        <div class="loading" v-loading="isListLoading"></div>
    </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import {formatTime} from '@/utils'
import Empty from '@/components/Empty'
export default {
    components: { Avatar, Empty },
    props: ["list", 'isListLoading'],
    methods: {
        formatTime
    },
};
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.list-area-container {
    width: 100%;
    height: 100%;
    position: relative;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            display: flex;
            width: 100%;
            border-bottom: 1px solid lighten(@gray, 20%);
            margin-top: 20px;

            .content-container {
                margin-left: 20px;
                width: 100%;
                box-sizing: border-box;

                .top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .nickname {
                        font-size: 20px;
                        color: @success;
                    }

                    .time {
                        font-size: 14px;
                        color: @gray;
                    }
                }

                .content {
                    margin: 10px 0;
                }
            }
        }
    }

    .loading {
        width: 100%;
        height: 50px;
        position: relative;
    }
}
</style>