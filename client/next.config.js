module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions.poll = 600;
    return config;
  }
};