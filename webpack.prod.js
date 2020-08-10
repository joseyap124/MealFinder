const { merge } = require("webpack-merge");
const common = require("./webpack.common.js"); 
 
 
module.exports = merge(common, {
    mode: "development",
    module: {
        rules: [
            /* babel loader */
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    }
})
