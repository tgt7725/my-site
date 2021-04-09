<template>
    <div class="blog-toc-container">
        <h3>目录</h3>
        <NavList v-if="lists.length" :lists="listToc" @select="handleSelect" />
    </div>
</template>

<script>
import NavList from "../NavList";
import {debounce} from '@/utils'
export default {
    components: { NavList },
    props: ["lists"],
    data() {
        return {
            activeHash: "",
        };
    },
    created() {
        this.handleScrollDebounce = debounce(this.handleScroll, 50)
        this.$bus.$on('mainScroll', this.handleScrollDebounce);
    },
    destroyed() {
        this.$bus.$off('mainScroll', this.handleScrollDebounce);
    },
    computed: {
        listToc(toc) {
            const dfs = (toc) => {
                if (!toc || toc.length === 0) {
                    return [];
                }
                return toc.map((t) => ({
                    ...t,
                    isSelect: t.anchor === this.activeHash,
                    children: dfs(t.children),
                }));
            };
            return dfs(this.lists);
        },
        doms() {
            const doms = [];
            const dfs = (t) => {
                for (const item of t) {
                    doms.push(document.getElementById(item.anchor));
                    if(item.children && item.children.length) {
                        dfs(item.children);
                    }
                }
                return doms;
            };
            return dfs(this.lists);
        },
    },
    methods: {
        handleSelect(item) {
            location.hash = item.anchor;
        },
        handleScroll() {
            this.activeHash = '';
            const limit = 200;
            for (const dom of this.doms) {
                if(!dom){
                    continue;
                }
                const top = dom.getBoundingClientRect().top;
                if(top > 0 && top < limit) {
                    this.activeHash = dom.id;
                    return;
                }else if(top > limit) {
                    return;
                }else {
                    this.activeHash = dom.id;
                }
            }
        }
    },
};
</script>

<style lang="less" scoped>
.blog-toc-container {
    width: 300px;
    height: 100%;
    position: relative;
    overflow-y: auto;
    padding: 20px 30px;
    box-sizing: border-box;
}
</style>