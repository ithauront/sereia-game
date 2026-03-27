export async function loadCollisionMapData(src: string): Promise<ImageData> {
  const image = new Image()
  image.src = src

  await new Promise((resolve) => {
    image.onload = resolve
  })

  const canvas = document.createElement('canvas')
  canvas.width = image.width
  canvas.height = image.height

  const context = canvas.getContext('2d')!
  context.drawImage(image, 0, 0)

  return context.getImageData(0, 0, image.width, image.height)
}
