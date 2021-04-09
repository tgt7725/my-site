<template>
    <div class="to-top-container" v-show="show" @click="handleClick">
        Top
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    mounted() {
        this.$bus.$on('mainScroll', this.beShow)
    },
    beforeDestroy() {
        this.$bus.$off('mainScroll', this.beShow)
    },
    methods: {
        beShow(dom) {
            if(!dom) {
                this.show = false;
                return;
            }
            this.show = dom.scrollTop > 800
        },

        handleClick() {
            this.$bus.$emit('setScroll', 0);
        }
    },
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.to-top-container {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 50px;
    right: 50px;
    color: #fff;
    border-radius: 50%;
    background: @primary;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    transition: .5s;

    &:hover {
        transform: scale(1.2);
    }
}
</style>