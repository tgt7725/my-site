<template>
    <div class="nav-list-container">
        <ul class="nav">
            <li class="nav-item" v-for="(item, i) in lists" :key="i">
                <a
                    @click="handleClick(item)"
                    :class="{ active: item.isSelect }"
                >
                    <span>{{ item.name }}</span>
                    <span class="total">{{ item.aside }}</span>
                </a>
                <NavList :lists="item.children" @select="handleClick" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "NavList",
    props: {
        lists: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        handleClick(item) {
            this.$emit("select", item);
        },
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.nav-list-container {
    padding: 0 20px;
    .nav-list-container {
        padding: 0;
    }
    .nav {
        margin: 0;
        padding: 0;
        list-style: none;
        .nav {
            margin-left: 1.5em;
        }
        .nav-item {
            cursor: pointer;
            line-height: 40px;
            min-height: 40px;
            font-size: 14px;
            span {
                padding-right: 15px;
                &.total {
                    color: @gray;
                }
            }
            a.active {
                color: @warn;
            }
        }
    }
}
</style>