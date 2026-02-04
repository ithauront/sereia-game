import { useMemo } from 'react'

import { useMediaQuery } from './useMediaQuery'
import { useViewportSize } from './useViewportSize'
//TODO: padronizar os tamanhos das consts
//TODO: temos que adaptar para se o celular esta vertical ou horizontal. ou então dar um aviso que o jogo se joga na vertical.
export function useCameraConfig() {
  const { width, height } = useViewportSize()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const cameraSize = useMemo(() => {
    if (isMobile) {
      return {
        x: 360,
        y: 640,
      }
    }
    return {
      x: 1280,
      y: 720,
    }
  }, [isMobile])

  const zoomFactor = useMemo(() => {
    if (isMobile) return 1
    return Math.max(width / cameraSize.x, height / cameraSize.y)
  }, [isMobile, width, height, cameraSize])

  return {
    cameraSize,
    zoomFactor,
    isMobile,
  }
}
