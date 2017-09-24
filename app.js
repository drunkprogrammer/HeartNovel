var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var ejs = require('ejs');
var proxy=require('http-proxy-middleware');

var routes = require('./routes/index');
var reg = require('./routes/reg');
var login = require('./routes/login');
var logout = require('./routes/logout');
var test = require('./routes/test');
var main = require('./routes/main');
var upload = require('./routes/upload');
var newnovel=require('./routes/newnovel');
var onebook=require('./routes/onebook');
var beginread=require('./routes/beginread');
var bookshelf=require('./routes/bookshelf');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');



//app.engine('.html', require('ejs').__express);  
//app.set('view engine', 'html');  

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('public/stylesheets/webcont/common'));
//这里传入了一个密钥加session id
app.use(cookieParser('Wilson'));
//使用靠就这个中间件
app.use(session({ secret: 'wilson'}));
app.use('/api', proxy({
  target: 'http://api.zhuishushenqi.com/',
  pathRewrite: {'^/api' : '/'}, 
  changeOrigin: true
}
));

app.use('/chapter', proxy({
  target: 'http://chapter2.zhuishushenqi.com/',
  pathRewrite: {'^/chapter' : '/chapter'},
  changeOrigin: true
}
));
app.use('/', routes);
app.use('/reg', reg);
app.use('/login', login);
app.use('/logout', logout);
app.use('/test', test);
app.use('/upload', upload);
app.use('/newnovel',newnovel);
app.use('/onebook',onebook);
app.use('/beginread',beginread);
app.use('/bookshelf',bookshelf);
/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



app.listen(8000, function(){
     console.log("Server has strart! Port: 8000");
});

module.exports = app;
