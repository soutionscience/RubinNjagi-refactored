const work = require('../models/work');

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