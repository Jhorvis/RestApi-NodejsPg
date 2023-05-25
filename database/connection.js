const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1945',
    database: 'firstapi',
    port: '5432'
})

module.exports = pool;