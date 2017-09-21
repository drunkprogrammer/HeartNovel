var express = require('express');
var router = express.Router();
	formidable = require("formidable");//formiable支持上传图片和视频
	AVATAR_UPLOAD_FOLDER = '/avatar/'

/* GET home page. */
router.get('/', function(req, res) {
  res.render('test.html', { title: 'testExpress' });
});

module.exports = router;