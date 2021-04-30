require('dotenv').config({ path: './.env' })
require('./database/db')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')
const userRouter = require('./routes/userRouter')
const { clientAuth } = require('./middlewares/auth')



const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.json())
app.use(cors())

//rotes 
app.use('/api', userRouter)
app.use('*', clientAuth)





//listen server
const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`Example app listening on port ${port}`))