type Props = {
  x: number
  y: number
  collisionData: ImageData
}

export function isWalkable({ x, y, collisionData }: Props) {
  const pixelX = Math.floor(x)
  const pixelY = Math.floor(y)

  if (pixelX < 0 || pixelY < 0 || pixelX >= collisionData.width || pixelY >= collisionData.height) {
    return false
  }

  const indexForRedCollor = (pixelY * collisionData.width + pixelX) * 4
  const red = collisionData.data[indexForRedCollor]

  const isPositionWalkable = red > 200
  //if red is over 200 it means is white and white area on map is the walkable area

  return isPositionWalkable
}
