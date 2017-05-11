const path = require('path');   // helper from node

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),  // __dirname is constant in nodeJs and it is reference to Current Working Dir
    filename: 'bundle.js'
  },
  module: {
    rules: [
    {
      use:'babel-loader',
      test: /\.js$/,
    },
    {
      
    }
    ]
  }
};

module.exports = config;