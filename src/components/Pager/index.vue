<template>
    <div class="pager-container" v-if="totalPage > 1">
        <a :class="{ disable: current === 1 }" @click="changePage(1)">首页</a>
        <a :class="{ disable: current === 1 }" @click="changePage(current - 1)">上一页</a>
        <a
            v-for="(n, i) in visiblePages"
            :key="i"
            :class="{ page: true, active: n === current }"
            @click="changePage(n)"
        >{{n}}</a>
        <a :class="{ disable: current === totalPage }" @click="changePage(current + 1)">下一页</a>
        <a :class="{ disable: current === totalPage }" @click="changePage(totalPage)">尾页</a>
    </div>
</template>

<script>
export default {
    props: {
        current: {
            type: Number,
            default: 1,
        },
        total: {
            type: Number,
            default: 0,
        },
        limit: {
            type: Number,
            default: 10,
        },
        visibleNumber: {
            type: Number,
            default: 10,
        },
    },

    computed: {
        totalPage() {
            return Math.ceil(this.total / this.limit);
        },
        visiblePages() {
            const arr = [];
            for(let i = this.minPage; i <= this.maxPage; i++) {
                arr.push(i);
            }
            return arr;
        },
        minPage() {
            let min = this.current - Math.floor(this.visibleNumber / 2)
            if(min + this.visibleNumber > this.totalPage) {
                min = this.totalPage - this.visibleNumber + 1;
            }
            if(min < 1) {
                min = 1;
            }
            return min;
        },
        maxPage() {
            let max = this.minPage + this.visibleNumber - 1;
            if(max > this.totalPage) {
                max = this.totalPage;
            }
            return max
        }
    },

    methods: {
        changePage(newPage) {
            if(newPage < 1) {
                newPage = 1;
            }else if (newPage > this.totalPage) {
                newPage = this.totalPage;
            }
            if(newPage === this.current) {
                return;
            }
            this.$emit('changePage', newPage);
        }
    }
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.pager-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;

    a {
        display: block;
        color: @primary;
        text-align: center;
        width: 4vw;
        align-self: center;
        margin: 0 5px;
        padding: 5px;
        border: 1px solid;
        cursor: pointer;
        user-select: none;

        &.page {
            width: 30px;
        }

        &.disable {
            color: @lightWords;
            cursor: not-allowed;
        }

        &.active {
            color: @words;
            border: none;
            font-weight: bold;
            cursor: text;
        }
    }
}
</style>