const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express()
const options = {
    target:'https://gateway.marvel.com:443/',
    chageOrigin: true,
    pathRewrite: {

        '^/mcu': '/v1/public/characters'
    },
    params: {
		apikey: 'ed15d1316caf743defbe9f6733e07008',
        hash: 'SHA-256',
        ts: Date.now()
	},

}
// using morgan for logs
app.use(morgan('combined'));
app.use( express.static('public') )
app.use(createProxyMiddleware('/mcu', options));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes/index'));


app.listen(3000, () => {
    console.log(`> Ready on http://localhost:3000`);
});