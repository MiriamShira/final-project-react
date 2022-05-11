const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy=   {
  "target": "http://localhost:4020",
  
  "secure": false
}

module.exports = function(app) {
  app.use(
    '/search',
    createProxyMiddleware(proxy)
  );
};
