<template>
    <div>
        <Pager
            :total="total"
            :current="current"
            @changePage="changePage($event)"
            ref="pager"
        />
    </div>
</template>

<script>
import Pager from "./";
export default {
    components: {
        Pager,
    },

    data() {
        return {
            total: 1002,
            current: 1,
        };
    },

    methods: {
        changePage(newPage) {
            this.current = newPage; // 问题：如果current是默认值呢？
        },
    },
};
</script>

<style lang="less" scoped>
// .iconfont {
// 	color: red;
// }
</style>
