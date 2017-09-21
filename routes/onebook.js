var express = require('express'),
 router = express.Router();

router.get('/onebook', function(req, res) {
//res.location('/newnovel'); 
  res.sendFile( __dirname + "/" + "onebook" );
});

module.exports = router;