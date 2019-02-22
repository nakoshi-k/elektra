const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require("path");
const es5 = require("./webpack.config");
es5.resolve.plugins = [new TsconfigPathsPlugin({
        configFile:  __dirname + "/tsconfig.es5.json"
    }
)];


const mode = (process.argv.find(arg => arg.slice(0,6) === "--mode") 
    || "").replace("--mode=","") || es5.mode

const min = (mode === "production") ? ".min" : "";

es5.output.filename = `elektra${min}.es5.js`

module.exports = es5