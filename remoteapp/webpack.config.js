const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3001,
    static: {
      directory: "./public"
    },
    historyApiFallback: true,
    hot: true,
    open: true,
    compress: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  output: {
    publicPath: "http://localhost:3001/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: "asset/resource"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteapp",
      filename: "remoteEntry.js",
      exposes: {
        "./Widget": "./src/Widget.js",
      },
      shared: { 
        react: { singleton: true, eager: true }, 
        "react-dom": { singleton: true, eager: true } 
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
  ]
};
