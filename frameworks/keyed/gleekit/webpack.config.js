const path = require("path");

module.exports = function () {
  const mode = process.env.NODE_ENV || "development";
  let presets, devServer, devtool;
  if (mode === "production") {
    presets = ["@babel/preset-env"];
  } else {
    (devServer = {
      static: "./",
      hot: true,
      historyApiFallback: true,
    }),
      (devtool = "eval-source-map");
  }
  return {
    mode: mode,
    entry: "./src/main.jsx",
    devtool: devtool,
    devServer: devServer,
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          /* 
          Ensures we process the gleekit package, but not others in node_modules.
          Note that this will not take effect if your babel config is in
          package.json or .babelrc - it must be in here or in babel.config.cjs

          This works in the monorepo too.
        */
          exclude: /node_modules\/(?!(gleekit)\/).*/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: presets,
                // plugins are defined in babel.config.cjs
              },
            },
          ],
        },
      ],
    },
  };
};
