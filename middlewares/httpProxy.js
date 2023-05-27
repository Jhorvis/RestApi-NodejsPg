const { createProxyMiddleware } = require("http-proxy-middleware");

const options = {
    target:'https://v2.jokeapi.dev',
    changeOrigin: true,
    pathRewrite: {

        '^/joke': '/joke/Any'
    }
}

const proxyhost = createProxyMiddleware('/joke', options)


module.exports = proxyhost;