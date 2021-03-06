var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose= require('mongoose')
var cors = require('cors')
var config= require('./config')

 var about  = require('./routes/about.route');
 var upload = require('./routes/uploads.route')
 var work = require('./routes/work.route');
var education = require('./routes/education.routes')
var contact = require('./routes/contact.route')


var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// show directory to save 


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));



 app.use('/api/about', about);
 app.use('/api/uploads', upload);
 app.use('/api/work', work);
 app.use('/api/education', education);
 app.use('/api/contact', contact);
 app.get('*', function(req, res){ return res.sendFile(path.join(__dirname, 'public/index.html'))})

 mongoose.connect(process.env.MONGOLAB_URI || config.mongoDbUrl, function(err, db){
	if(!err){
          if(config.localDb){ console.log('connected to local mongo db')}
          else{console.log("connected to remote db")}
          database= db;
	}
	else{
		console.log('failed to connect to mongo')
		throw err
	}
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
