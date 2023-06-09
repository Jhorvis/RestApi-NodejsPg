const express = require('express');
require('dotenv').config();
const app = express()

const serverport =  3000;//process.env.SERVER_PORT;
app.use( express.static('public') )
//middlewares
app.use(express.json());
app.use(express.urlencoded( { extened: false } ))

//routes
app.use(require('./routes/index'));


app.listen(serverport)
console.log(`Server on port ${serverport}`)
