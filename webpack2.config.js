const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
  const isDevelopment = options.mode === 'development';

  return {
    entry: './client/index.js', // Entry point of your React app
    output: {
      path: path.resolve(__dirname, 'client/dist'), // Output directory
      filename: 'bundle.js', // Output bundle filename
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'client/dist'), // Serve files from this directory
      port: 3000, // Port number
      hot: true, // Enable Hot Module Replacement
      open: true, // Automatically open in default browser
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader', // Use Babel for transpilation
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'], // Handle CSS files
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/public/index.html', // HTML template for generating output HTML
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'], // Resolve these extensions without specifying them
    },
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', // Generate source maps
  };
};


// {
//     "scripts": {
//       "start": "webpack serve --config webpack.config.js --mode development",
//       "build": "webpack --config webpack.config.js --mode production"
//     }
