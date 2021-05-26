const Users = require ('../models/userModdel')
const Ticket =require('../models/ticketM')

exports.admin = (req, res) => {
    const id = '608fe562f0cc8e2d1caf6ed9'
    Users.findById(id).then(data => {
        return res.json(data)
    })
}
exports.getAllTicket = async (req, res) => {
    try {
         
        const allTicket = await Ticket.find().sort({"date": -1}) 
        res.status(200).json(allTicket)
    } catch (error) {
         res.status(500).json(error)
    }

}
exports.getallUser = async (req, res) => {
    try {
       const allUser = await Users.find()
       res.status(200).json(allUser) 
    } catch (error) {
        res.status(500).json(error)
    }
}
