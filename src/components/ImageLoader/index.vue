<template>
    <div class="image-loader-container">
        <img class="placeholder" :src="placeholder" v-if="!isRemove" />
        <img
            class="target-img"
            :src="src"
            @load="load"
            :style="{
                opacity,
                transition: duration + 'ms',
            }"
        />
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
    data() {
        return {
            isLoaded: false,
            isRemove: false
        };
    },

    computed: {
        opacity() {
            return this.isLoaded ? 1 : 0;
        }
    },

    methods: {
        load() {
            this.isLoaded = true;
            setTimeout(() => {
                this.isRemove = true;
                this.$emit('load');
            }, this.duration)
        }
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/mixin.less";
.image-loader-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        .self-fill();
    }

    .placeholder {
        filter: blur(2vw);
    }
}
</style>