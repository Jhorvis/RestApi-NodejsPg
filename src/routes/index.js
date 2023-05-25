const { Router } = require("express");
const { getUsers, newUser, getUserById, deleteUsersById, updateUserById } = require("../controllers/index.controller");

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', newUser);
router.delete('/users/:id', deleteUsersById);
router.put('/users/:id', updateUserById)

module.exports = router;