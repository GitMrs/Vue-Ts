module.exports = {
    configureWebpack: config => {},
    devServer: {
        proxy:{
            '/api':{
                target:'http://api.douban.com/v2',
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    '^/api':'',
                }
            }
        }
    }

}