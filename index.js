var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var routes = require('./routes');

app.use(bodyParser.json());

app.use('/', routes)
// router.post('/:move', function(req, res){
//   console.log('someoneMoved!', req.params.move );
// });


app.listen(3000, function(){
  console.log('The game has begun!! Do a post');
  console.log('request at the following #s to play')
  console.log('     |           |      ');
  console.log('  0  |     1     |   2  ');
  console.log('     |           |      ');
  console.log('-----|-----------|------');
  console.log('     |           |      ');
  console.log('  3  |     4     |   5  ');
  console.log('     |           |      ');
  console.log('-----|-----------|------');
  console.log('     |           |      ');
  console.log('  6  |     7     |   8  ');
  console.log('     |           |      ');
});

