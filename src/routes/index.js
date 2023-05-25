const { Router } = require("express");
const { getUsers, newUser } = require("../controllers/index.controller");

const router = Router();

router.get('/users', getUsers);
router.post('/users', newUser);

module.exports = router;