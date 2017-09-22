var express = require('express'),
 router = express.Router();
//var proxy=require('http-proxy-middleware');

//http://api.zhuishushenqi.com/toc/577b477dbd86a4bd3f8bf1b2?view=chapters
//追书神器的api
//var options={
//	target:"http://api.zhuishushenqi.com/",
//	changeOrigin:true,
//	ws:true,
//	pathRewrite:{
//	'^/api/old-path':'^/api/new-path';
//	'^/api':'/api/toc'
//	},
//	router:{
//		'dev.localhost':'http://localhost:8000'
//	},
//	changeOrigin:true
//}
//var exampleProxy=proxy(options);
//var app=express();
//app.use('/api',exampleProxy);
//router.get('');

router.get('/beginread', function(req, res) {
//res.location('/newnovel'); 
  res.sendFile( __dirname + "/" + "beginread" );
});

module.exports = router;