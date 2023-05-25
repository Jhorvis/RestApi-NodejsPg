const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1945',
    database: 'firstapi',
    port: '5432'
})

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users')
    console.log(response.row)
    res.status(200).json(response.rows)
}


const newUser = async (req, res) => {
    const {name, email} = req.body;
    await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email])
    res.json({
        message: 'User Added succesfully',
        body: {
            user: {
                name,
                email
            }
        }
    })
}

module.exports = { 
    getUsers,
    newUser
};