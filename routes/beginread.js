 var express=require("express");
 var proxy=require("http-proxy-middleware");
 var router=express.Router();
 var app=express();

 /*
章节内容api: chapter2.zhuishushenqi.com/chapter/章节link(从章节列表中获得)?k=2124b73d7e2e1945&t=1468223717
example:    chapter2.zhuishushenqi.com/chapter/http%3a%2f%2fbook.my716.com%2fgetBooks.aspx%3fmethod%3dcontent%26bookId%3d1127281%26chapterFile%3dU_1212539_201701211420571844_4093_2.txt?k=2124b73d7e2e1945&t=1468223717
method: GET
 */
 var options={
     target:"http://chapter2.zhuishushenqi.com",
     changeOrigin:true,
     pathwrite:{
        '^/chapter2':'/'
     },
     ws:true,
     router:{
     	'localhost':'http://localhost:8000'
     }
 }
 var pro=proxy(options);
 app.use('/chapter2',pro);
 var content_data=res.write(data);
 console.log(content_data);
 res.get('/beginread',function (req,res) {
 	// body...
 	res.sendFile(__dirname+"/"+"beginread");
 })