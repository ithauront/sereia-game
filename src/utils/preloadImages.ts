export function preloadImages(images: string[]) {
  return Promise.all(
    images.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image()
          img.src = src
          img.onload = () => resolve()
        }),
    ),
  )
}
