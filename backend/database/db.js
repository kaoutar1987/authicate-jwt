const mongoose = require('mongoose')
const DB_URI = process.env.DATABASE

mongoose.connect(DB_URI,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
})
.then(()=> {
    console.log("database connection success")
})
.catch(err => { console.log(err)})