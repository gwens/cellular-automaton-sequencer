module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['react'] } },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['react'] } },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(png|svg|jpg|gif)$/, use: [ 'file-loader' ] }
    ]
  }
}