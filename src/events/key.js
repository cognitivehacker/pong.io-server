export default {
  keyDown(socket, data){
    console.log('keydown', data)
    io.local.emit('keydown', data)
  }
}