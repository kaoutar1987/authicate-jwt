const Users = require ('../models/userModdel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// HERE SETUP JWT
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
     return jwt.sign({ id }, process.env.JWT_SECRET, {
          expiresIn: maxAge
     })
}



exports.register = (req, res) => {
  const { username, email, password } = req.body
  
  //Hash Password
  let hashPass = bcrypt.hashSync(password, 5)

  Users.findOne({ email: email })
  .then((data) => {
    if(data) {
      return res.json({message: "This email is exist"})
    }

    // Add new user
    new Users({
      username: username,
      email: email,
      password: hashPass
    })
    .save()
    .then((data)=> {
      return res.json({message: "Your registration was done success", data: data})
    })

  })
  .catch(err => { console.log(err) })
}




exports.login = (req, res) => {
  const { email, password } = req.body
  Users.findOne({ email: email })
  .then((data) => {
    if(!data) {
      return res.json({message: "This email is not exist"})
    }

    if(bcrypt.compareSync(password, data.password)) {


      //if login success crete token 
      const token = createToken(data._id)
        return res.status(200).cookie('user_jwt', token, {
          httpOnly: true,
          maxAge: maxAge * 1000
        }).json({message: 'You\'re LoggedIn'})
    }

    return res.json({message: "Incoreect pass"})
  })
  .catch(err => { console.log(err) })
}