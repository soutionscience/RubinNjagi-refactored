var multer = require('multer');
var About = require('../models/about')

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './src/server/uploads');
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
    upload(req,res, function(err, resp){
        console.log(req.file);
        if(err){
            console.log("there is an error")
             res.json({error_code:1,err_desc:err});
             return;
        }
        console.log("no problem")
         res.json(req.file);
    });
})

exports.get = (function(req, res){
    console.log("hitting get")
    res.status(200).json({status: "hitting get"})
})