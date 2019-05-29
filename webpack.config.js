const webpack = require('webpack');
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = function (env, argv) {
    return {
        mode : argv.mode || 'development',
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: `[name]${argv.mode === 'production' ? '.[contenthash]' : ''}.js`,
            publicPath: '/',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(ts|tsx)?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ]
                },
                {
                    test: /.(png|jp(e)?g|gif|ttf|otf|eot|woff(2)?|svg|webp)(\?[a-z0-9]+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        }
                    }]
                },
            ]
        },
        resolve: {
            extensions: [
                '.js',
                '.jsx',
                '.tsx',
                '.ts'
            ]
        },
        plugins: [
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
            new LodashModuleReplacementPlugin,
            new HtmlWebpackPlugin({
                template: 'src/index.ejs',
                inject: true,
                appMountId: 'root',
                favicon: 'src/favicon.webp',
                'meta': {
                    'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
                }
            }),
            new MiniCssExtractPlugin({
                filename: `[name]${argv.mode === 'production' ? '.[hash:8]' : ''}.css`,
                chunkFilename: `[id]${argv.mode === 'production' ? '.[hash:8]' : ''}.css`,
            })
        ],
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\\/]node_modules[\\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            },
            minimizer: [
                new TerserJSPlugin({}),
                new OptimizeCSSAssetsPlugin({}),
            ],
        },
        devServer: {
            host: 'localhost',
            port: '80',
            disableHostCheck: true,
            historyApiFallback: true,
            contentBase: '/',
        }
    }
};

module.exports = config;