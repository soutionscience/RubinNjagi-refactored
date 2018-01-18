var About = require('../models/about')

exports.post = ( function(req, res, next){
	var package = new About(req.body)
	package.save(function(err, pack){
		if (err) throw err;
		res.status(201).send({status: "created about"})
	})
});

exports.get= (function(req, res){
    About.find({})
    .exec(function(err, resp){
        if(err) throw err;
       res.json(resp);
    })
});

exports.delete = (function(req, res){
    About.remove({}, function(err, resp){
        if(err) throw err;
        res.status(200).send({status: "deleted all abouts"});
    } )

});
 
exports.deleteOne= (function(req,res,next){
    About.findByIdAndRemove(req.params.id, function(err, resp){
        if(err) throw err;
        res.status(200).send({status: "deleted about"});

    })

})