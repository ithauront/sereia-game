import { useCallback, useMemo, useState } from 'react'

import { useWorld } from '../Contexts/worldContext'
import { clamp } from '../utils/clamp'

type Vector2d = {
  x: number
  y: number
}

type UseCameraParams = {
  cameraSize: Vector2d
  zoom: number
}

type CameraRectType = {
  left: number
  top: number
  right: number
  bottom: number
  width: number
  height: number
}

type Camera = {
  position: Vector2d
  cameraRect: CameraRectType
  cameraMoveTo: (target: Vector2d) => void
}

export function useCamera({ cameraSize, zoom }: UseCameraParams): Camera {
  const { height: worldHeight, width: worldWidth } = useWorld()
  const [position, setPosition] = useState<Vector2d>({
    x: cameraSize.x / 2,
    y: cameraSize.y / 2,
  })

  const cameraRect = useMemo(() => {
    const viewW = cameraSize.x / zoom
    const viewH = cameraSize.y / zoom

    return {
      left: position.x - viewW / 2,
      top: position.y - viewH / 2,
      right: position.x + viewW / 2,
      bottom: position.y + viewH / 2,
      width: viewW,
      height: viewH,
    }
  }, [position, cameraSize, zoom])

  const cameraMoveTo = useCallback(
    (target: Vector2d) => {
      const halfCamX = cameraSize.x / (2 * zoom)
      const halfCamY = cameraSize.y / (2 * zoom)

      const clampedX = clamp(target.x, halfCamX, worldWidth - halfCamX)
      const clampedY = clamp(target.y, halfCamY, worldHeight - halfCamY)

      // TODO: aqui entraria lógica de smoothing / lerp
      // TODO: aqui poderia existir deadzone de camera
      // TODO: aqui poderia existir offset dinâmico (look ahead)

      setPosition({
        x: clampedX,
        y: clampedY,
      })
    },
    [cameraSize, worldWidth, worldHeight, zoom],
  )

  return {
    position,
    cameraMoveTo,
    cameraRect,
  }
}
