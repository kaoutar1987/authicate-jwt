const express = require ('express')
const router = express.Router()
const { register, login, logout } = require('../controllers/userCtrl')
const { readTicket, createTicket } = require('../controllers/ticketC')
const {getAllTicket, getallUser} =require('../controllers/adminCtrl')
const { admin } = require('../controllers/adminCtrl')
const { auth }=require('../middlewares/auth')



//register user 
router.post('/register', register)

//login User 
router.post('/login', login)

//login User 
router.get('/admin', auth, admin)

//logout
router.get('/logout', logout)  

//ticket user
router.get('/ticketUser', readTicket)

// ticket user
router.post('/addTicket', createTicket)

//get allticket
router.get('/allticket', getAllTicket)

//get alluser 
router.get('/alluser', getallUser)
















module.exports = router