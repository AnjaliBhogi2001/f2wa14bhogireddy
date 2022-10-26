var express = require('express');
var router = express.Router();
var x = Math.random()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { 
    title: 'Computation by Anjali',
    hypot: 'Math.hypot() applied to '+x+' is '+Math.hypot(x),
    ceil: 'Math.ceil() applied to '+x+' is '+Math.ceil(x),
    clz32: 'Math.clz32() applied to '+x+' is '+Math.clz32(x) 
  })
});

module.exports = router;
