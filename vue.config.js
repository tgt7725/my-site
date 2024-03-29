module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.baidu.com'
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/my-site/'
    : '/',

    // 通过 configureWebpack 选项，可对 webpack 进行额外的配置
    // 该配置最终会和 vue-cli 的默认配置进行合并（webpack-merge）
    configureWebpack: require('./webpack.config')
}