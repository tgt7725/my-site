<template>
    <div class="container">
        <ImageLoader
            src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
            placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
            :duration="10000"
            @load="load"
        />
    </div>
</template>

<script>
import ImageLoader from "./";
export default {
    components: {
        ImageLoader,
    },
    methods: {
        load() {
            console.log('图片加载完成！');
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    width: 400px;
    height: 400px;
    border: 1px solid;
}
</style>