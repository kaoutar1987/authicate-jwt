const Users = require ('../models/userModdel')

exports.admin = (req, res) => {
    const id = '608fe562f0cc8e2d1caf6ed9'
    Users.findById(id).then(data => {
        return res.json(data)
    })
}