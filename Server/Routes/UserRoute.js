const express = require('express')
const router = express.Router()
const {Register, Login, getAllUsers} = require('../Controllers/UserController')
const { AuthMiddleWare } = require('../Middlewares/AuthMiddleWare')

//Sign Up
router.post('/register', Register)
router.post('/login', Login)
router.get('/', AuthMiddleWare ,getAllUsers)

module.exports = router