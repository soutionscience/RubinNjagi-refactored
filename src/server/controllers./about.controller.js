var About = require('../models/about');
var multer = require('multer');

// multer storage settings for file upload
var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');


exports.get = function(req, res){
    console.log("hitting get")
    About.find({})
      .exec(function(err, resp){
          if(err) throw err;
           res.json(resp);
      })

    

}
exports.post = ( upload, function(req, res){
    console.log("hitting post")
    // console.log(req.body)
    // console.log(req.files)
 upload(req,res,function(err){
        console.log(req.file);
        if(err){
             res.json({error_code:1,err_desc:err});
             return;
        }
         res.json({error_code:0,err_desc:null});
    });
    // var about = new About(req.body);
    // about.save(function(err, resp){
    //     if(err)throw err;
    //     res.status(201).json({status: "about created"})
    // })
})
exports.delete = function( req, res){
 About.remove({}, function(err ,resp){
     if(err) throw err,
     res.json(resp)
 })
}