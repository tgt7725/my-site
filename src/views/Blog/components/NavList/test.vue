<template>
    <NavList :lists="lists" @select="handleSelect" />
</template>

<script>
import NavList from "./";
export default {
    components: {
        NavList,
    },
    data() {
        return {
            lists: [
                { name: "a", isSelect: false },
                { name: "b", isSelect: false },
                {
                    name: "c",
                    isSelect: false,
                    children: [
                        { name: "c-1", isSelect: false },
                        {
                            name: "c-2",
                            isSelect: false,
                            children: [
                                { name: "c-2-1", isSelect: true },
                                { name: "c-2-2", isSelect: false },
                                { name: "c-2-3", isSelect: false },
                                { name: "c-2-4", isSelect: false },
                            ],
                        },
                        { name: "c-3", isSelect: false },
                        { name: "c-4", isSelect: false },
                    ],
                },
                { name: "d", isSelect: false },
            ],
        };
    },
    methods: {
        handleSelect(item) {
            console.log(item);
        },
    },
};
</script>

<style lang="less" scoped>
</style>