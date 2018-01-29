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


exports.getOne = (function(req, res){
    education.findById(req.params.id, function(err, edu){
        if(err) throw err;
        res.json(edu)

    })
})
exports.addImage = (function(req, res){
    education.findById(req.params.id, function(err, resp){
        if (err) throw err;
        for(var i = (resp.images.length-1); i>=0; i--){
            resp.images.id(resp.images[i]._id).remove();
     
        }
        resp.images.push(req.body)
        resp.save(function(err, result){
            if(err) throw err;
            res.status(201).send({status: "images added"});
        })
    })
})

exports.deleteOne =(function(req, res){
    education.findByIdAndRemove(req.params.id, function(err, resp){
        if(err) throw err;
        res.status(200).send({status:"deleted about"});
    })
})