const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const presets = [];
const productionPreset = '@babel/preset-env';

const baseConfig = {
  mode: 'production',
  optimization: {
    usedExports: true,
    minimizer: [
      new TerserPlugin()
    ]
  },
  entry: './src/index.jsx',
  devServer: {
    static: "./",
    hot: true,
    historyApiFallback: true
  },
  output: {
    publicPath: '/dist/',
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [{
      test: /\.[jt]sx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "babel-loader",
        }
      ]
    }]
  }
};


module.exports =  function() {
  const mode = process.env.NODE_ENV || "development";
  baseConfig.mode = mode;
  if (mode == "production") {
    presets.push(productionPreset);
    console.log("MODE=development... Using preset @babel/preset-env.");
  } else {
    console.log("MODE=development... Not using any presets.");
    baseConfig["devtool"] = "eval-source-map"
  }
  return baseConfig
}