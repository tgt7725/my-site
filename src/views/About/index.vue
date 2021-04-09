<template>
    <div class="about-container" v-loading="loading || !isShow">
        <iframe
            v-if="src"
            :src="src"
            frameborder="0"
            @load="isShow = true"
        ></iframe>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            isShow: false,
        };
    },
    computed: {
        ...mapState("about", {
            src: "data",
            loading: "loading",
        }),
    },
    created() {
        this.$store.dispatch("about/getData");
    },
};
</script>

<style lang="less" scoped>
.about-container {
    width: 100%;
    height: 100%;
    position: relative;

    iframe {
        width: 100%;
        height: 100%;
        display: inline-block;
    }
}
</style>