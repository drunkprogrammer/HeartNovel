var express = require('express'),
 router = express.Router();

router.get('/newnovel', function(req, res) {
//res.location('/newnovel'); 
  res.sendFile( __dirname + "/" + "newnovel" );
});

module.exports = router;