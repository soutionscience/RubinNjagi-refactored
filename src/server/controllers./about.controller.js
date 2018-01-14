var About = require('../models/about')

exports.post = (function(res, res){

});

exports.get= (function(req, res){
    About.find({})
    .exec(function(err, resp){
        if(err) throw err;
       res.json(resp);
    })
});