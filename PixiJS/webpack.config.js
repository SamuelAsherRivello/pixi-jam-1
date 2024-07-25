import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Use fileURLToPath to get the file path of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env) => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body', // Ensure scripts are injected into the body
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'assets', to: 'assets' }],
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
      main: './src/scripts/client/client.ts',
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
        '@client': path.resolve(__dirname, 'src/scripts/client'),
        '@shared': path.resolve(__dirname, 'src/scripts/shared'),
      },
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
      port: 3000, // Change to a different port, e.g., 3001
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
