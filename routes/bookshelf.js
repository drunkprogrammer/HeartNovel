var express = require('express'),
 router = express.Router();

router.get('/bookshelf', function(req, res) {
//res.location('/newnovel'); 
  res.sendFile( __dirname + "/" + "bookshelf" );
});

module.exports = router;