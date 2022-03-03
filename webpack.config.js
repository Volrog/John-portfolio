const path = require( 'path' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' );


const isDev = process.env.NODE_ENV === 'development';
const babelOptions = preset => {
    const opt = {
        presets: ['@babel/preset-env'],
    }
    
    if( preset ) {
        opt.presets.push( preset );
    }

    return opt;
}


module.exports = {
    context: path.resolve( __dirname, 'src' ),
    mode: 'development',

    entry: {
        main: [ '@babel/polyfill', './index.jsx' ]
    },

    output: {
        filename: isDev ? '[name].js' : '[name].[hash].js',
        path: path.resolve( __dirname, 'build' ),
        assetModuleFilename: isDev ? 'assets/[name].[ext][query]' : 'assets/[name].[hash][ext][query]',
    },

    resolve: {
        extensions: [ '.js', '.json', '.jsx'],
        alias: {
            '@assets': path.resolve( __dirname, 'src/assets' ),
            '@comp': path.resolve( __dirname, 'src/assets/components')
        }
    },

    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    },

    devServer: {
        hot: true,
        port: 4200,
        historyApiFallback: true
    },

    devtool: isDev ? 'source-map' : false,

    plugins: [
        new HTMLWebpackPlugin( {
            template: './index.html',
        } ),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin( {
            patterns: [
                {
                    from: path.resolve( __dirname, 'public/' ),
                    to: path.resolve( __dirname, 'build/' ),
                },
            ],
        } ),
        new MiniCssExtractPlugin( {
            filename: isDev ? '[name].css' : '[name].[hash].css',
        } ),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: 
                            {
                                mode: 'local',
                                auto: true,
                                exportGlobals: true,
                                localIdentName: '[folder]__[local]--[hash:base64:5]',
                                exportOnlyLocals: false,
                            }
                        },
                    }
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [ 
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                auto: true,
                                exportGlobals: true,
                                localIdentName: '[folder]__[local]--[hash:base64:5]',
                                exportOnlyLocals: false,
                            },
                        }
                    }, 
                    'sass-loader' ,
                ],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: isDev ? 'assets/img/[name].[ext][query]' : 'assets/img/[name].[hash][ext][query]',
                },
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: isDev ? 'assets/fonts/[name].[ext][query]' : 'assets/fonts/[name].[hash][ext][query]',
                },
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions(),
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react'),
                }
            },
        ]
    }
}