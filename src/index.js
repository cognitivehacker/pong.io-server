const server = require('http').createServer();
const io = require('socket.io')(server, {
  serveClient: false,
  wsEngine: 'ws' // uws is not supported since it is a native module
});

const port = process.env.PORT || 3000;

io.on('connect', onConnect);
server.listen(port, () => console.log('server listening on port ' + port));


import eventKeys from "./events/key"

function onConnect(socket){

  console.log('connect ' + socket.id);

  socket.on('disconnect', () => console.log('disconnect ' + socket.id));
  socket.on('keyDown', (data) => {
    console.log('keydown', data)
    io.local.emit('keydown', data)
  
  });
  socket.on('keyUp', () => console.log('keyup'));

}
