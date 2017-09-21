var express = require('express'),
    router = express.Router();
    User = require('../models/user.js'),

router.get('/', function(req, res) {
  User.getUsrList(function (err, results){
      if (err) {
          res.locals.error = err;
          res.render('index', 
          { 
            title: TITLE_REG
          });
          return;
      }
      res.render('userlist',{
        title:'用户列表',
        result: results
      });

  })
  
});

module.exports = router;