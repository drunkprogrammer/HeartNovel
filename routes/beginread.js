var express = require('express');
router = express.Router();
var proxy = require('http-proxy-middleware');
var app = express();
var options = {
		target: "http://api.zhuishushenqi.com/",
		changeOrigin: true,
		ws: true,
		pathRewrite: {
			'^/api': '/',
			'^/chapter': '/chapter'
		},
		router: {
			'localhost': 'http://localhost:8000'
		},
		changeOrigin: true
	}
var exampleProxy = proxy(options);
app.use('/api', exampleProxy);
var chapterdata = res.write(data);
json = JSON.parse(chapterdata);
console.log(json);
//http://api.zhuishushenqi.com/toc/577b477dbd86a4bd3f8bf1b2?view=chapters
//追书神器的api

//require('opn')('http://api.zhuishushenqi.com');

//function onProxyReq(proxyReq,req,res){
//	res.on('end',function(){
//		var chapterdata = res.write(data);
//		json=JSON.parse(chapterdata);
//		console.log(json);
//	}
//}
//function onError(err, req, res) {
//	if(err) {
//		console.log("this is an fail request");
//	} else {
//	
//		var json = (eval('(' + chapterdata + ')')).chapters;
//		console.log(json.title);
//	}
//}
//var json=(eval('('+data+')')).chapters;
//console.log(data);
//function onProxyRes(proxyRes,req,res){
//	console.log(res.toLocaleString());
//}
//router.get('/api', function(req, res) {
//	res.on('end', function() {
//		var options = {
//			target: "http://api.zhuishushenqi.com/",
//			changeOrigin: true,
//			ws: true,
//			pathRewrite: {
//				'^/api': '/',
//				'^/chapter': '/chapter'
//			},
//			router: {
//				'localhost': 'http://localhost:8000'
//			},
//			changeOrigin: true
//		}
//		var exampleProxy = proxy(options);
//		app.use('/api', exampleProxy);
//		var chapterdata = res.write(data);
//		json = JSON.parse(chapterdata);
//		console.log(json);
//	});
//})
router.get('/beginread', function(req, res) {
	//res.location('/newnovel'); 
	//	var json='';
	//	res.on('data',function(message){
	//		json + =message;
	//	});
	//	res.on('end',function(){
	//		json=JSON.parse(json);
	//		console.log(json);
	//	})
	//res.on('end',function(){
	//		var chapterdata = res.write(data);
	//		json=JSON.parse(chapterdata);
	//		console.log(json);
	//	}
	res.sendFile(__dirname + "/" + "beginread");

	//	}
});

module.exports = router;