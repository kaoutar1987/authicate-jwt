const Assign = require('../models/assingM')
const Ticket = require('../models/ticket')
const jwt = require('jsonwebtoken')





exports.assignTicket = (req, res) => {
    const { id_user, id_ticket, id_technician } = req.body
    
    new Assign({
         id_user: id_user,
         id_ticket: id_ticket,
         id_technician: id_technician
    })
    .save()
    .then(() => {
         Ticket.findByIdAndUpdate(id_ticket, {status: false}).then(() => {
              res.json({message: 'Ticket is assigned'})
         })
    })
}
exports.readAssigned = (req, res) => {
    Assign.find({is_accepted: null})
    .populate('id_user id_technician id_ticket')
    .then(data => {
         return res.json(data)
    })
}
//exports.ticketClose = (req, res) => {
//  Ticket.find({status: true}).populate('id_user').then(data => {
 //        return res.json(data)
   // })
//}

exports.ticketRefused = (req, res) => {
    Assign.find({is_accepted: false})
    .populate('id_ticket id_user id_technician')
    .then(data => {
         return res.json(data)
    })
}






