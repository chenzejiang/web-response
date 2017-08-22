var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel?plugins[]=react-html-attrs'],
        include: path.join(__dirname, 'src')
      },
    //下面是使用 ant-design 的配置文件
      // { 
      //   test: /\.css$/, 
      //   loader: 'style-loader!css-loader?modules!postcss-loader' }

      { 
        test: /\.css$/, 
        loaders:['style-loader','css-loader?plugins[]=postcss-loader']
      }



      // {
      //   test:/\.css$/,
      //   use:[
      //     'style-loader','css-loader?importLoaders=1','postcss-loader' 
      //   ]
      // }


    ]
  },
  // postcss: [
  //   require('autoprefixer')//调用autoprefixer插件
  // ],

  plugins: [
        // new webpack.LoaderOptionsPlugin({
        //     options:{
        //          postcss: [
        //             require('autoprefixer')//调用autoprefixer插件
        //           ],
        //     }
        // }),

    
    // // 浏览器加前缀
    // new webpack.LoaderOptionsPlugin({
    //     options: {
    //         postcss: [require('autoprefixer')({browsers:['last 5 versions']})]
    //     }
    // }),
    // new webpack.LoaderOptionsPlugin({
    //     options: {
    //       postcss: function () {
    //         return [precss, autoprefixer];
    //       }
    //     }
    // }),
    // new webpack.LoaderOptionsPlugin({
    //     options: {
    //         postcss: function(){
    //             return [
    //                 require("autoprefixer")({
    //                     browsers: ['ie>=8','>1% in CN']
    //                 })
    //             ]
    //         }
    //     }
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
  ]
};
