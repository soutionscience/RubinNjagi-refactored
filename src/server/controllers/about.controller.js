var About = require('../models/about');

exports.get = function(req, res){
    console.log("hitting get")
    About.find({})
      .exec(function(err, resp){
          if(err) throw err;
           res.json(resp);
      })

    

}
exports.post = function(req, res){
    console.log("hitting post")
    var about = new About(req.body);
    about.save(function(err, resp){
        if(err)throw err;
        res.status(201).json({status: "about created"})
    })
}
exports.delete = function( req, res){
 About.remove({}, function(err ,resp){
     if(err) throw err,
     res.json(resp)
 })
}