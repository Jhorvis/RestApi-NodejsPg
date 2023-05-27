const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const app = express();

const options = {
    origin: '', // Solo permitir solicitudes desde este origen
    methods: ['POST'], // Solo permitir solicitudes GET y POST
    allowedHeaders: ['Content-Type', 'Authorization'] // Solo permitir encabezados Content-Type y Authorization
}

app.use(cors(options));





// using morgan for logs
app.use(morgan('combined'));
app.use( express.static('public') )

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(require('../middlewares/auth'))

app.use(require('./routes/index'));


app.listen(3000, () => {
    console.log(`> Ready on http://localhost:3000`);
});