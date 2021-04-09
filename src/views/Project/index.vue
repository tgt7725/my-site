<template>
    <div class="project-container" v-loading="loading" ref="projectContainer">
        <Empty text="暂无项目/效果" v-if="data.length === 0 && !loading" />
        <ul class="project-item-container">
            <li class="project-item" v-for="item in data" :key="item.id">
                <a v-if="item.thumb" :href="item.url" class="img-container" target="_blank">
                    <img
                        v-lazy="item.thumb"
                        alt=""
                    />
                </a>
                <div class="content-container">
                    <a :href="item.url" class="title">{{item.name}}</a>
                    <a :href="item.url" class="github">github</a>
                    <p class="description" v-for="(d, i) in item.description" :key="i">
                        {{d}}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";
import scroll from '@/mixins/scroll'
import Empty from '@/components/Empty'
export default {
    components: {
        Empty
    },
    mixins: [scroll("projectContainer")],
    created() {
        this.$store.dispatch("project/getData");
    },
    computed: {
        ...mapState("project", ["data", "loading"]),
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.project-container {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    overflow-y: scroll;
    scroll-behavior: smooth;

    .project-item-container {
        margin: 0;
        padding: 0;
        list-style: none;

        .project-item {
            width: 95%;
            padding: 20px;
            margin: 20px auto;
            border: 1px solid @gray;
            box-sizing: border-box;
            display: flex;
            transition: 0.5s;

            &:hover {
                box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.5);
                transform: scale(1.05);
            }

            .img-container {
                display: block;
                width: 250px;
                height: 200px;
                flex: 0 0 auto;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .content-container {
                display: flex;
                flex-direction: column;
                padding: 10px 20px;

                .title {
                    display: block;
                    line-height: 30px;
                    min-height: 30px;
                    font-size: 26px;
                    font-weight: bold;
                }

                .github {
                    display: block;
                    line-height: 30px;
                    height: 30px;
                    font-size: 14px;
                    color: @primary;
                    margin: 5px 0;
                }

                .description {
                    font-size: 16px;
                    line-height: 24px;
                    margin: 5px 0;
                }
            }
        }
    }
}
</style>