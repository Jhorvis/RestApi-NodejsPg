const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1945',
    database: 'firstapi',
    port: '5432'
})

const poolAws = new Pool({
    host: 'database-2.chw0jjnrseac.us-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'Sanipez.006767',
    database: 'postgres',
    port: '5432'
})


module.exports = {
    pool,
    poolAws
};