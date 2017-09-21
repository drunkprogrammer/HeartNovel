var express = require('express');
var router = express.Router();
formidable = require("formidable");
TITLE_REG = '注册';
AVATAR_UPLOAD_FOLDER = '/avatar/';
fs = require("fs");

function uuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        var uuid = s.join("");
        return uuid;
    }
    /* GET home page. */
router.get('/', function(req, res) {
    res.render('upload', {
        title: TITLE_REG
    });
});
router.post('/', function(req, res) {
    var folder_Name = uuid();//个人文件夹的名称
    var file_Name = uuid();   //上传照片的文件名称
    
    form = new formidable.IncomingForm(); //创建上传表单
    form.encoding = 'utf-8'; //设置编辑
    form.fileDir = 'public' + AVATAR_UPLOAD_FOLDER; //设置上传目录
    form.uploadDir = form.fileDir + folder_Name + "/"; //设置上传目录
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024; //文件大小
    var picUrl = AVATAR_UPLOAD_FOLDER+ folder_Name + "/" + file_Name + ".jpg";
    fs.exists(form.fileDir, function(exists) {
        if (!exists) {
            fs.mkdir(form.fileDir, function() {
                console.log(form.fileDir);
            });
        } else {
            console.log("上传文件夹目录已存在！");
        }
    });
    fs.exists(form.uploadDir, function(exists) {
        if (!exists) {
            fs.mkdir(form.uploadDir, function() {
				form.parse(req, function(err, fields, files) {
	                    if (err) {
	                        res.locals.error = err;
	                        res.render('login', {
	                            title: TITLE_REG
	                        });
	                        return;
	                    }

	                    var extName = ''; //后缀名
	                    switch (files.fileupload.type) {
	                        case 'image/pjpeg':
	                            extName = 'jpg';
	                            break;
	                        case 'image/jpeg':
	                            extName = 'jpg';
	                            break;
	                        case 'image/png':
	                            extName = 'png';
	                            break;
	                        case 'image/x-png':
	                            extName = 'png';
	                            break;
	                    }
	                    if (extName.length == 0) {
	                        res.locals.error =
	                            '只支持png和jpg格式图片';
	                        res.render('index', {
	                            title: TITLE_REG
	                        });
	                        return;
	                    }
						
	                    var avatarName = file_Name +
	                        '.' + extName;
	                    var newPath = form.uploadDir +
	                        avatarName;			
	                    fs.renameSync(files.fileupload
	                        .path, newPath); //重命名
	                });
            });
        } else {
            console.log("上传文件夹已存在！");
            form.parse(req, function(err, fields, files) {
                if (err) {
                    res.locals.error = err;
                    res.render('login', {
                        title: TITLE_REG
                    });
                    return;
                }
                var extName = ''; //后缀名
                switch (files.fileupload.type) {
                    case 'image/pjpeg':
                        extName = 'jpg';
                        break;
                    case 'image/jpeg':
                        extName = 'jpg';
                        break;
                    case 'image/png':
                        extName = 'png';
                        break;
                    case 'image/x-png':
                        extName = 'png';
                        break;
                }
                if (extName.length == 0) {
                    res.locals.error = '只支持png和jpg格式图片';
                    res.render('index', {
                        title: TITLE_REG
                    });
                    return;
                }
                var avatarName = file_Name + '.' +
                    extName;
                var newPath = form.uploadDir +
                    avatarName;
                fs.renameSync(files.fileupload.path,
                    newPath); //重命名
            });
        }
    });
    res.locals.success = '上传成功';
    res.render('reg', {
        title: TITLE_REG,
        url: picUrl
    });
});
module.exports = router;