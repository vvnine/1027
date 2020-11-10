const path = require('path');
module.exports ={
    mode: 'development',
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
        module:{
            rules:[{
                test: /\.(png|jpg|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        name:'[name].[ext]',/*原来的名字,placeholders占位符*/
                        outputPath:'images/',
                        limit:20480,
                         }
                }
            }]
        },
}