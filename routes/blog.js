const express = require('express');
let router = express.Router();
let mysql = require('../db/index.js');

router.get('/:id',(req,res,next) => {
  let {id} = req.params;
  mysql(`select * from article_list where id =${id}`).then(data => {
      res.render('blog',{data:data[0]})
  }).catch(err => {
    console.log(err)
  })
})

module.exports=router;