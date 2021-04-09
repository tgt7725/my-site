<template>
    <div class="home-container" @wheel="handleWheel" v-loading="isLoading">
        <ul
            class="banner-container"
            ref="banner"
            :style="{ marginTop }"
            @transitionend="handleTransitionEnd"
        >
            <li v-for="item in data" :key="item.id">
                <Carousel :item="item" :canShow="!switching" />
            </li>
        </ul>

        <div class="arrowUp" v-show="index > 0" @click="switchTo(index - 1)">
            <Icon type="arrowUp" />
        </div>

        <div
            class="arrowDown"
            v-show="index < data.length - 1"
            @click="switchTo(index + 1)"
        >
            <Icon type="arrowDown" />
        </div>

        <ul class="indicator">
            <li
                v-for="(item, i) in data"
                :key="item.id"
                @click="switchTo(i)"
                :class="{
                    'indicator-item': true,
                    active: i === index,
                }"
            ></li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.home-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    // 测试
    // width: 60%;
    // height: 40%;
    // margin: 100px auto;
    // border: 1px solid;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .banner-container {
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.3s;

        li {
            width: 100%;
            height: 100%;
        }
    }

    .arrowUp,
    .arrowDown {
        .self-center();
        font-size: 36px;
        color: @gray;
        cursor: pointer;
    }

    .arrowDown {
        top: auto;
        bottom: 10px;
        transform: translate(-50%, 0);
        animation: arrowDown 2s infinite;
    }

    .arrowUp {
        top: 10px;
        transform: translate(-50%, 0);
        animation: arrowUp 2s infinite;
    }

    @keyframes arrowUp {
        0% {
            transform: translate(-50%, -10px);
        }
        50% {
            transform: translate(-50%, 0px);
        }
        100% {
            transform: translate(-50%, -10px);
        }
    }

    @keyframes arrowDown {
        0% {
            transform: translate(-50%, 10px);
        }
        50% {
            transform: translate(-50%, 0px);
        }
        100% {
            transform: translate(-50%, 10px);
        }
    }

    .indicator {
        .self-center();
        left: auto;
        right: 10px;
        cursor: pointer;
    }

    .indicator-item {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 2px solid @lightWords;
        margin: 5px 0;

        &.active {
            background: #fff;
        }
    }
}
</style>

<script>
// import { getBanner } from "@/api/getBanner";
import Carousel from "./Carousel";
import Icon from "@/components/Icon";
// import fetchData from '@/mixins/fetchData.js'
import { mapState } from "vuex";
export default {
    components: {
        Carousel,
        Icon,
    },
    // mixins: [fetchData([])],
    data() {
        return {
            // isLoading: true,
            // banners: [],
            index: 0,
            containerHeight: 0,
            switching: false,
            // isChange: false,
        };
    },

    computed: {
        marginTop() {
            return -this.containerHeight * this.index + "px";
        },
        ...mapState("banner", {
            data: "data",
            isLoading: "loading",
        }),
    },

    async created() {
        // this.banners = await getBanner();
        // this.isLoading = false;
        this.$store.dispatch("banner/getData");
    },

    mounted() {
        this.containerHeight = this.$refs.banner.clientHeight;
        window.addEventListener("resize", this.handleResize);
    },

    destroyed() {
        window.removeEventListener("resize", this.handleResize);
    },

    methods: {
        // fetchData() {
        //     return getBanner();
        // },

        switchTo(i) {
            this.index = i;
            this.switching = true;
            // this.isChange = true;
        },

        handleResize() {
            this.containerHeight = this.$refs.banner.clientHeight;
        },

        handleWheel(e) {
            if (this.switching) {
                return;
            }
            if (e.deltaY > 0 && this.index < this.data.length - 1) {
                this.index++;
                this.switching = true;
                // this.isChange = true;
            } else if (e.deltaY < 0 && this.index > 0) {
                this.index--;
                this.switching = true;
                // this.isChange = true;
            }
        },

        handleTransitionEnd() {
            this.switching = false;
            // this.isChange = false;
        },
    },
};
</script>
