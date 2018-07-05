var express = require('express');
var router = express.Router();
let mysql = require('../db/index.js');



/* GET home page. */
router.get('/', function(req, res, next) {
    mysql('select * from article_list').then(data =>{
      res.render('index', {data: data});
    }).catch(err => {
      console.log('err'+err)
    })
});

module.exports = router;
