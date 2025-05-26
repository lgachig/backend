const express = require('express');
const router = express.Router();
const {login, addUser, getUsers} = require('../controllers/usuarios');

router.route('/login').post(login)
router.route('/register').post(addUser)
router.route('/usu').get(getUsers);
    
module.exports = router;