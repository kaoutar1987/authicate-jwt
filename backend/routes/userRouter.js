const express = require ('express')
const router = express.Router()
const { register, login, logout } = require('../controllers/userCtrl')
const { admin } = require('../controllers/adminCtrl')
const { auth }=require('../middlewares/auth')



//register user 
router.post('/register', register)


//login User 
router.post('/login', login)


//login User 
router.get('/admin', auth, admin)

router.get('/logout', logout)  



module.exports = router