import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env) => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'assets', to: 'assets' }],
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css', // Place CSS files in dist/styles/
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
      filename: 'scripts/[name].[contenthash].bundle.js', // Place JS files in dist/scripts/
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      library: {
        name: 'TreasureHunterClient',
        type: 'umd',
        export: 'createAndInitializeApp',
      },
      globalObject: 'this',
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@client': path.resolve(__dirname, 'src/scripts/client'),
        '@shared': path.resolve(__dirname, 'src/scripts/shared'),
        '@server': path.resolve(__dirname, 'src/scripts/server'),
        '@tests': path.resolve(__dirname, 'src/scripts/tests'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'src/scripts/client/tsconfig.json'),
            },
          },
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
      hot: false,
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
