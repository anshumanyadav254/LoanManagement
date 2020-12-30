const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'https://quizzical-nightingale-0aa777.netlify.app/' }));
};
