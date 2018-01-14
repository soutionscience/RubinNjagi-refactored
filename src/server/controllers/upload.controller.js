var multer = require('multer');
var About = require('../models/about')

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



exports.post = ( upload, function(req, res){
    upload(req,res,function(err){
        console.log(req.file);
        if(err){
            console.log("there is an error")
             res.json({error_code:1,err_desc:err});
             return;
        }
        console.log("working but not really")
         res.json({error_code:0,err_desc:null});
    });
})

exports.get = (function(req, res){
    console.log("hitting get")
    res.status(200).json({status: "hitting get"})
})