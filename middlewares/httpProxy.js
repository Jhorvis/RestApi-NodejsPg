const { createProxyMiddleware } = require("http-proxy-middleware");

const options = {
    target:'http://google.cl',
    chageOrigin: true,
    pathRewrite: {

    }
}

const exampleProxy = createProxyMiddleware('/users', options);

module.exports = exampleProxy;