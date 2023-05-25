const { json } = require("express")
const pool = require("../../database/connection")

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users')
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

const getUserById = async (req, res) => {
    const { id } = req.params;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if ((response.rows).length < 1) return res.status(401).send('Usuario no encontrado')
    res.json(response.rows)
}

const deleteUsersById = async (req, res) => {
    const { id } = req.params;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.json({
        msg: 'Usuario Eliminado',
        id: id,
    })
}

const updateUserById = async (req, res) => {
    const { id } = req.params;
    const {name, email} = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    res.json({
        msg: `Usuario ${id} Actualizado`
    })
}

module.exports = { 
    getUsers,
    newUser,
    getUserById,
    deleteUsersById,
    updateUserById
};