var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
  if(req.cookies.islogin)
  { 
         console.log('cookies:' + req.cookies.islogin);
       req.session.username = req.cookies.islogin;
  }  

  if(req.session.username)
  {    
          console.log('session:' + req.session.username);
        res.locals.username = req.session.username;      
  }
  else
  {
        res.redirect('/login');
        return;    
  }

  res.render('index',{title:'主页'});
});
router.get('/newnovel', function(req, res) {
	 res.render( "newnovel" );
});
router.get('/onebook', function(req, res) {
	 res.render( "onebook" );
});
router.get('/beginread', function(req, res) {
	 res.render( "beginread" );
});
router.get('/bookshelf', function(req, res) {
	 res.render( "bookshelf" );
});
module.exports = router;