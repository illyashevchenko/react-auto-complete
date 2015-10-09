module.exports = function (config) {
  config.set({
    frameworks: [ 'mocha' ],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'src/**/*.spec.jsx'
    ],
    browsers: [ 'PhantomJS' ],
    preprocessors: {
      'src/**/*.jsx': ['webpack']
    },
    reporters: ['spec'],
    webpack: {
      module: {
        loaders: [{
          test: /\.(js|jsx)$/, exclude: /(bower_components|node_modules)/,
          loader: 'babel-loader'
        }]
      }
    },
    webpackMiddleware: { noInfo: true }
  });
};
