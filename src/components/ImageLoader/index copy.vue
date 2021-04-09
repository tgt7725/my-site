<template>
    <div class="imageLoader-container">
        <img :src="placeholder" @load="loadImg($event)" />
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            default: 500,
        },
    },

    methods: {
        loadImg(e) {
            const imgDom = e.path[0];
            const img = new Image();
            if (imgDom.src === this.placeholder) {
                img.src = this.src;
                img.onload = () => {
                    this.$emit("load");
                    setTimeout(() => {
                        imgDom.src = img.src;
                        console.log('替换了');
                    }, this.duration);
                }
            } 
        },
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.imageLoader-container {
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
    }
}
</style>