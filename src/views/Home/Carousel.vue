<template>
    <div
        class="carousel-container"
        ref="container"
        @mousemove="handleMove"
        @mouseleave="handleLeave"
    >
        <div class="imgContainer" ref="imgContainer" :style="imgPosition">
            <ImageLoader
                :src="item.bigImg"
                :placeholder="item.midImg"
                @load="handleLoad"
            />
        </div>
        <h2 class="title" ref="title">{{ item.title }}</h2>
        <h3 class="description" ref="description">{{ item.description }}</h3>
    </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
    components: {
        ImageLoader,
    },
    props: ["item", "canShow"],
    data() {
        return {
            titleWidth: 0,
            descriptionWidth: 0,
            container: null,
            imgContainer: null,
            mouseX: 0,
            mouseY: 0,
        };
    },

    computed: {
        center() {
            return {
                x: this.container.width / 2,
                y: this.container.height / 2,
            };
        },

        imgPosition() {
            if (!this.container || !this.imgContainer) {
                return;
            }
            const extraWidth = this.imgContainer.width - this.container.width;
            const extraHeight =
                this.imgContainer.height - this.container.height;
            const left = -(extraWidth / this.container.width) * this.mouseX;
            const top = -(extraHeight / this.container.height) * this.mouseY;
            return {
                transform: `translate(${left}px, ${top}px)`,
            };
        }
    },

    mounted() {
        this.titleWidth = this.$refs.title.clientWidth;
        this.descriptionWidth = this.$refs.description.clientWidth;
        this.$refs.title.style.width = 0;
        this.$refs.description.style.width = 0;
        this.updateSize();
        this.show(this.titleWidth, this.descriptionWidth, "1s", "1s 1s");
        window.addEventListener("resize", this.updateSize);
    },

    destroyed() {
        window.removeEventListener("resize", this.updateSize);
    },

    methods: {
        handleLoad() {
            // this.show(this.titleWidth, this.descriptionWidth, "1s", "1s 1s");
            // this.$refs.title.style.width = this.titleWidth + "px";
            // this.$refs.description.style.width = this.descriptionWidth + "px";
        },

        show(w1, w2, t1, t2) {
            this.$refs.title.style.transition = `${t1}`;
            this.$refs.description.style.transition = `${t2}`;
            this.$refs.title.style.width = w1 + "px";
            this.$refs.description.style.width = w2 + "px";
        },

        updateSize() {
            this.container = {
                width: this.$refs.container.clientWidth,
                height: this.$refs.container.clientHeight,
            };
            this.imgContainer = {
                width: this.$refs.imgContainer.clientWidth,
                height: this.$refs.imgContainer.clientHeight,
            };
            this.setInitMousePosition();
        },

        handleMove(e) {
            const rect = this.$refs.container.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
        },

        setInitMousePosition() {
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
        },

        handleLeave() {
            this.setInitMousePosition();
        },
    },

    watch: {
        canShow(newValue, oldValue) {
            if (newValue) {
                this.show(
                    this.titleWidth,
                    this.descriptionWidth,
                    "1s",
                    "1s 1s"
                );
            } else {
                this.show(0, 0, "none", "none");
            }
        },
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.carousel-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    .imgContainer,
    .title,
    .description {
        position: absolute;
    }

    .imgContainer {
        width: 110%;
        height: 110%;
        transition: 0.2s;
    }

    .title,
    .description {
        line-height: 50px;
        color: #fff;
        letter-spacing: 3px;
        margin: 0;
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
            0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
        left: 30px;
        top: calc(50% - 40px);
        font-size: 30px;
        user-select: none;
        // width: 0;
        overflow: hidden;
        white-space: nowrap;
        // transition: 1s;
    }

    .description {
        top: 50%;
        font-size: 16px;
        // transition: 1s 1s;
        // transition-delay: 1s;
    }
}
</style>