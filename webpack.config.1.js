const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require("path");
module.exports = {
    mode: 'production',
    entry: {
        "app" : __dirname + '/src/index.ts',
        },
    output: {
      filename: 'elektra.min.js',
      path : path.resolve(__dirname + "/dist/"),
      library: 'elektra',
      libraryTarget: 'window',
      libraryExport : "default"
    },
    optimization: {
        splitChunks: {
          name: 'vendor',
          chunks: 'initial',
        }
    },
    resolve: {
        extensions: [".ts"],
        plugins: [new TsconfigPathsPlugin({
            configFile:  __dirname + "/tsconfig.json"
        }
        
        )], 
    },
    devtool : "hidden-source-map",
    module: {
        rules: [
            { 
              test: /\.ts?$/,
              use : { 
                  loader: 'ts-loader',
                  options : {
                       transpileOnly : false
                    } 
                } 
            }
        ]
    }
  };
