const { json } = require("express")
const { supabase } = require("../../database/connection")

const getUsers = async (req, res) => {
    const {data, error} = await supabase.from('users').select('*')
    res.status(200).send(data)
}


const newUser = async (req, res) => {
    const {name, email} = req.body;
    const {data, error} = await supabase.from('users').insert([
            {
                name: name,
                email: email
            }
    ])
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
    const {data, error} =  await supabase.from('users').select('*').eq('id', id)
    res.json(data)
}

const deleteUsersById = async (req, res) => {
    const { id } = req.params;
    const {data, error} = await supabase.from('users').delete().eq('id', id);
    res.json({
        msg: 'Usuario Eliminado',
        id: id,
    })
}

const updateUserById = async (req, res) => {
    const { id } = req.params;
    const {name, email} = req.body;
    const {data, error} =  await supabase.from('users').update({
        name: name,
        email: email
    }).eq('id', id);
    res.json({
        msg: `Usuario ${id} Actualizado`
    })
}

const MCU =  async (req, res) => {
    
}

module.exports = { 
    getUsers,
    newUser,
    getUserById,
    deleteUsersById,
    updateUserById
};