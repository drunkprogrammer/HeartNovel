var express = require('express'),
 router = express.Router();

var appproxy=require('http=proxy-middleware');
var options={
	target:"http://example.com",
	changeOrigin:true,
	ws:true,
	pathRewrite:{
	'^/api/old-path':'^/api/new-path';
	'^/api/remove/path':'path'
	},
	router:{
		'dev.localhost':'http://localhost:8000'
	}
}



router.get('/beginread', function(req, res) {
//res.location('/newnovel'); 
  res.sendFile( __dirname + "/" + "beginread" );
});

module.exports = router;