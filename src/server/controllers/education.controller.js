const education = require('../models/education');

exports.post = (function(req, res){
    const ed = new education( req.body)
    ed.save(function(err, resp){
        if(err) throw err;
        res.status(201).send({status: "added new education"})
    })
})

exports.get =(function(req, res){
    education.find({})
    .exec(function(err, resp){
        if(err) throw err
        res.json(resp)
    })
})