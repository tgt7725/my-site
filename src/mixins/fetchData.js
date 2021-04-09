/**
 * 混入了data属性和isLoading属性（组件混入的方式来解决代码重复的问题）
 * @param {*} defaultDataValue 异步请求的数据默认值，一般为一个数组或对象
 * @returns 
 */
export default function (defaultDataValue = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultDataValue
            }
        },

        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    }
}