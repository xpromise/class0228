const {resolve} = require('path');

//当我执行webpack时，它会去根路径下找webpack.config.js，读取其中的配置，执行其中的任务
module.exports = {
  //入口
  entry: './src/app.js',
  //输出
  output: {
    path: resolve(__dirname, 'build/js'),   //输出文件目录
    filename: 'built.js'     //输出的文件名
  },
  //loaders: 加载所有类型文件转化webpack能识别的模块
  module: {
    rules: [{      //loader的规则
      test: /\.less$/,   //检查是否是指定规则的文件，如果有满足条件的文件，就会执行use中的任务
      use: [{            //use中的任务是从右往左执行的，同步
        loader: "style-loader" // 将css作为style标签应用在网页上
      }, {
        loader: "css-loader" // 将css转化为commonjs的模块
      }, {
        loader: "less-loader" //编译less为css
      }]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            // name: '[hash].[ext]',   //文件名 [hash]  --- 哈希值   [ext] --- 后缀名
            outputPath: '../images',    //指定文件的输出目录
            publicPath: './build/images'  //指定引入资源的路径
          }
        }
      ]
    }]
  }
}