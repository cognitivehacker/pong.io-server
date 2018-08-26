var io = require("./server")

var ids = [];

io.on('connection', function(socket){

  ids.push(socket.id);

  console.log('a user connected');

  socket.on('playerKeyUp', msg => {
    let data = JSON.parse(msg)
    let response = { event: 'keyUp' }

    io.to(data.sid).emit('playerOneMove', response)

    ids.forEach(sid => {
      if(sid !== data.sid)
        io.to(sid).emit('playerTwoMove', response)
    })

  });

  socket.on('playerKeyDown', msg => {
    let data = JSON.parse(msg)
    let response = { event: 'keyDown' }
    io.to(data.sid).emit('playerOneMove', response)
    ids.forEach(sid => {
      if(sid !== data.sid)
        io.to(sid).emit('playerTwoMove', response)
    })
  });

});

/*

1. identificar quem que mandou
2. emitir movimento como player 1 para ele
3. emitir movimento para a outra pessoa como player 2
*/
