const express = require('express');
const morgan = require('morgan')

const app = express()

// using morgan for logs
app.use(morgan('combined'));
app.use( express.static('public') )

app.use(express.json());
app.use(express.urlencoded( { extened: false } ))

app.use(require('./routes/index'));


app.listen(3000, () => {
    console.log(`> Ready on http://localhost:3000`);
});