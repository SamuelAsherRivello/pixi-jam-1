const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body', // Ensure scripts are injected into the body
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ];

  if (env && env.analyze) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return {
    entry: {
      main: './src/scripts/index.ts',
      styles: './src/css/styles.css',
    },
    output: {
      filename: '[name].[contenthash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@src': path.resolve(__dirname, 'src')
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    plugins: plugins,
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    performance: {
      hints: false,
    },
    devServer: {
      port: 3000,
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      hot: false, // Disable HMR
      client: {
        logging: 'error',
      },
      setupMiddlewares: (middlewares, devServer) => {
        if (!devServer) {
          throw new Error('webpack-dev-server is not defined');
        }

        devServer.middleware.waitUntilValid(() => {
          console.log(`
//- - - - - - - - - - - - - - - - - - - - - - - - - - -
// Success! Play Via Browser:  http://localhost:${devServer.options.port}/ 
//- - - - - - - - - - - - - - - - - - - - - - - - - - -
          `);
        });

        return middlewares;
      },
    },
    stats: {
      all: false,
      errors: true,
      warnings: true,
      timings: false,
      entrypoints: false,
      assets: false,
    },
  };
};
