const express = require ('express')
const router = express.Router()
const { register, login } = require('../controllers/userCtrl')
const { auth }=require('../middlewares/auth')



//register user 

router.post('/register', register)

//login User 

router.post('/login', login)


//Verify Token 
router.get('/verify', auth)


   












module.exports = router