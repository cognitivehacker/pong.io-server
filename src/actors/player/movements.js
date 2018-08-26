import collision from 'Lib/physics/collision'

export default {
  moveUp(data){
    if(!collision.outOfBoundsTop(data.posY, state.height)){
      state.posY = state.posY - state.speed
    } else {
      state.posY = collision.getTopLimit()
    }
  },
  moveDown(data){
    if(!collision.outOfBoundsBottom(state.posY, state.height)){
      state.posY = state.posY + state.speed
    } else {
      state.posY = collision.getBottomLimit() - state.height
    }
  }
}
