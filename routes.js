var express = require('express');
var router = express.Router();

router.post('/:move', function(req, res){
  console.log('someoneMoved!', req.params.move );
  res.json({move: 3})
});

module.exports = router;
