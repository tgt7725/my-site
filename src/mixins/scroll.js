export default function (refName) {
    return {
        mounted() {
            this.$handleScroll = () => {
                this.$bus.$emit('mainScroll', this.$refs[refName]);
            };
            this.$refs[refName].addEventListener(
                "scroll",
                this.$handleScroll
            );
            this.$bus.$on('setScroll', this.$handleSetScroll);
        },

        beforeDestroy() {
            this.$bus.$emit('mainScroll');
            this.$bus.$off('setScroll', this.$handleSetScroll);
            this.$refs[refName].removeEventListener(
                "scroll",
                this.$handleScroll
            );
        },

        methods: {
            $handleSetScroll(value) {
                this.$refs[refName].scrollTop = value;
            }
        }
    }

}