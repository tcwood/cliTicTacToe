var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var routes = require('./routes');

app.use(bodyParser.json());

var turn = 1;
var board = [' ', ' ', ' ',
             ' ', ' ', ' ',
             ' ', ' ', ' ']

app.use('/', 
  router.post('/:move', function(req, res){
    console.log('someoneMoved!', req.params.move );
    var currentPiece = 'X';
    if (turn % 2 === 1) {
      currentPiece = 'O';
    };
    board.splice(req.params.move, 1, currentPiece);
    console.log('current board is:');
    console.log(` ${board[0]} | ${board[1]} | ${board[2]}`);
    console.log(`---|---|---`);
    console.log(` ${board[3]} | ${board[4]} | ${board[5]}`);
    console.log(`---|---|---`);
    console.log(` ${board[6]} | ${board[7]} | ${board[8]}`);
    console.log("it is player", (turn % 2 === 1 ? "1's" : "2's"), "turn");
    turn++;
    res.json({move: req.params.move});
    
  })
);


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

