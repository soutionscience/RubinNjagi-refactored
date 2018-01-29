const work = require('../models/work');
var test ='';

exports.post =(function(req, res){
    const newWork = new work(req.body)
    newWork.save(function(err, resp){
        if(err) throw err;
        res.status(201).send({status: "work created"})
    })

})


exports.get =(function(req, res){
    work.find({})
  .exec(function(err, resp){
      if(err) throw err;
      res.json(resp)
  })
})

exports.deleteOne = (function(req, res){
    work.findByIdAndRemove(req.params.id, function(err, resp){
        if(err) throw err;
        res.status(200).status({status:"work removed"});
    })
})

exports.addImage = (function(req, res){
    work.findById(req.params.id, function(err, resp){
        if(err)throw err;
        for(var i =(resp.images.length-1); i>=0; i--){
            resp.images.id(resp.images[i]._id).remove();


        }
        resp.images.push(req.body);
        resp.save(function(err, wrk){
            if(err) throw err;
            res.status(201).send({status: "image added"});

        })
    })
})