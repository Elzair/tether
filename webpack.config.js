var webpack = require('webpack');
module.exports = {
    context: __dirname
  , entry: {
        tether: [
            "./tether.js"
          , "./css/tether.css"
          , "./css/tether-theme-basic.css"
          , "./css/tether-theme-arrows.css"
          , "./css/tether-theme-arrows-dark.css"
        ]
    } 
  , output: {
        path: __dirname
      , filename: "[name].bundle.js"
    }
  , module: {
      loaders: [
        , {
              test: /\.css$/
            , loader: 'style-loader!css-loader'
          }
      ]
    }  
  , plugins: [
        new webpack.DefinePlugin({
          "process.env": {
            "NODE_ENV": JSON.stringify("production")
          }
        })
      , new webpack.optimize.UglifyJsPlugin()
    ]

};
