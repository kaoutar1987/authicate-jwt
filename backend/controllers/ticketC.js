const Ticket = require('../models/ticketM')

const jwt = require('jsonwebtoken')

exports.createTicket = (req, res) => {
    const { title, type, description,  urgence } = req.body
    console.log(title, type, description, urgence )
    
    //Get user ID
    let id_user
    const token = req.cookies.user_token
    if (token) {
         jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
              if (err) throw err
              id_user = decodedToken.id
         })
    } 
    
    new Ticket({
         id_user: id_user,
         title: title,
         type: type,
         description: description,
         urgence: urgence
    }).save()
    .then(data => {
         res.json({data: data, message: "success requist"})
    }).catch((error) => {
         res.json(error)
    })
}


exports.readTicket = async (req, res) => {
     try {
          let id_user
          const token = req.cookies.user_token
          if (token) {
          jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
               if (err) throw err
               id_user = decodedToken.id
          })
    } 
         const allTicket = await Ticket.find({id_user : id_user}).sort({"date": -1}) 
         res.status(200).json(allTicket)
     } catch (error) {
          res.status(500).json(error)
     }

}

exports.deleteTicket = (req, res) => {
    const { id } = req.params
    Ticket.findByIdAndRemove(id, (err) => {
         if (err) throw err
         res.status(200).send(' Deleted Ticket!')
    })
}
