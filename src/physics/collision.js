import gameWorld from 'Lib/gameWorld'

const TOP_LIMIT = 0

const collision = {
  getTopLimit: () =>  TOP_LIMIT,
  getBottomLimit: () =>  gameWorld.height,
  outOfBoundsTop: (posY) => posY <= TOP_LIMIT ? true : false,
  outOfBoundsBottom: (posY, objectHeight) => {
    return posY >= (gameWorld.height - objectHeight) ? true : false
  },
}

export default collision
