const contact = require('../models/contact')


exports.post = (function(req, res, next){
  
    var newContact = new contact(req.body)
    newContact.save(function(err, resp){
        if(err)throw err;
        res.status(201).send({status: "contacts saved"})
    })
})

exports.get =(function(req, res){
    contact.find({})
    .exec(function(err, resp){
        if(err) throw err
        res.json(resp)
    })
})