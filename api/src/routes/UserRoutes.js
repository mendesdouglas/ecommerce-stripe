const express = require('express')
const router = express.Router();

const UserController = require('../controller/UserController')

//router.post('/api/register', UserController.create)
router.post('/register',UserController.create)
//console.log('estou no user')
module.exports = router