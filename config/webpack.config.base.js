const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    publicPath: "/",
    path: path.join(__dirname, '../dist/'),
    chunkFilename: '[chunkhash].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        // 使用了这个load 可以直接在jsx文件中import less文件
        // 如: import 'entry.less'; 将自动将样式插入
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
        // loader: "style-loader!css-loader!less-loader"
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/images/[name].[hash:8].[ext]',
        },
      },
      // {
      //   //   使用了这个load 可以直接在jsx文件中import css文件
      //   //   如: import 'entry.css'; 将自动将样式插入
      //   test: /\.css$/,
      //   use: [
      //     require.resolve('style-loader'),
      //     {
      //       loader: require.resolve('css-loader'),
      //       options: {
      //         importLoaders: 1,
      //       },
      //     },
      //     {
      //       loader: require.resolve('postcss-loader'),
      //       options: {
      //         // Necessary for external CSS imports to work
      //         // https://github.com/facebookincubator/create-react-app/issues/2677
      //         ident: 'postcss',
      //         plugins: () => [
      //           require('postcss-flexbugs-fixes'),
      //           autoprefixer({
      //             browsers: [
      //               '>1%',
      //               'last 4 versions',
      //               'Firefox ESR',
      //               'not ie < 9', // React doesn't support IE8 anyway
      //             ],
      //             flexbox: 'no-2009',
      //           }),
      //         ],
      //       },
      //     }
      //   ],
      // },
      {
        test: /\.[s]?css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              module: true
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          require.resolve('sass-loader')
        ]
      }
    ]
  },
  resolve: {
    // 默认扩展名 import 可不带后缀的文件
    extensions: ['.js', '.jsx'],
    alias: {
      'static': path.join(__dirname, '../src/static')
    }
  },
  plugins: [new HtmlWebpackPlugin({
    inject: true,
    template: path.join(__dirname, '../src/index.html'),
  }),],
  devtool: 'source-map',
  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'src/static'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
  }
}
