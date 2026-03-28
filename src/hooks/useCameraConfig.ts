import { useMemo } from 'react'

import { useMediaQuery } from './useMediaQuery'
import { useViewportSize } from './useViewportSize'
import {
  MOBILE_CAM_HEIGHT,
  MOBILE_CAM_WIDTH,
  SCREEN_CAM_HEIGHT,
  SCREEN_CAM_WIDTH,
} from '../consts/magicNumbers'

export function useCameraConfig() {
  const { width, height } = useViewportSize()
  const isMobile = useMediaQuery('(pointer: coarse)') //mobile or tablet

  const cameraSize = useMemo(() => {
    if (isMobile) {
      return {
        x: MOBILE_CAM_WIDTH,
        y: MOBILE_CAM_HEIGHT,
      }
    }
    return {
      x: SCREEN_CAM_WIDTH,
      y: SCREEN_CAM_HEIGHT,
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
