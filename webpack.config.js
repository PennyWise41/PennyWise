const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader?limit=8192',
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './client/index.html'),
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, './build'),
    },
    historyApiFallback: true,
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    // proxy: {
    //   '/': 'http://localhost:3000',
    // },
    proxy: {
      "/server": {
        target: "http://localhost:3000/",
        secure: false,
      },
    },
  },
};






// // require the path
// const path = require('path');
// // require html webpack plugin
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// // const Dotenv = require('dotenv-webpack')

// module.exports = {
//   entry: './client/index.js',
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'bundle.js',
//   },
//   mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         exclude: /node_modules/,
        
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//       {
//         test: /\.svg$/,
//         use: [
//           {
//             loader: 'svg-url-loader',
//             options: {
//               limit: 10000, // Adjust the limit as needed
//               encoding: 'base64',
//             },
//           },
//         ],
//       },
      
//       {
//         test: /\.s?css/,
//         use: [
//           'style-loader',
//           'css-loader',
//           // 'sass-loader'
//         ],
//       },
//     ],
//   },
  
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './client/index.html',
//       filename: 'index.html',
      
//     }),
//     // new Dotenv(),
//   ],
//   //declare devServer
//   devServer: {
//     static: {
//       directory: path.resolve(__dirname, 'build'),
//     },
//     proxy: { '/api': 'http://localhost:3000' },
    
//   },
// };










// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// // const CopyWebpackPlugin = require('copy-webpack-plugin');
// process.env.NODE_ENV === 'development';

// module.exports = {
//   entry: './client/index.js',
//   mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
//   output: {
//     path: path.resolve(__dirname, './build'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-react', '@babel/preset-env'],
//           },
//         },
//       },
//       {
//         test: /\.tsx?$/,
//         exclude: /(node_modules)/,
//         use: 'ts-loader',
//       },
//       {
//         test: /\.s?[ac]ss$/i,
//         use: ['style-loader', 'css-loader', 'sass-loader'],
//       },
//       {
//         test: /\.(png|jp(e*)g|svg|gif)$/,
//         include: path.resolve(__dirname, 'server'),
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               outputPath: '',
//               name: '[name].[ext]',
//             },
//           },
//         ],
//       },
//       { test: /\\.(png|jp(e*)g|svg|gif)$/, use: ['file-loader'] },
//     ],
//   },

//   resolve: {
//     extensions: ['.ts', '.tsx', '.js', '.jsx'],
//   },

//   plugins: [
//     new HtmlWebpackPlugin({
//       filename: './client/index.html',
//       title: 'PennyWise',
//     }),
//   ],
//   devServer: {
//     historyApiFallback: {
//       index: '/index.html', // Specify the entry point HTML file
//     },
//     client: {
//       overlay: {
//         runtimeErrors: (error) => {
//           if (error.message === 'ResizeObserver loop limit exceeded') {
//             return false;
//           }
//           return true;
//         },
//       },
//     },
//   },
// };
