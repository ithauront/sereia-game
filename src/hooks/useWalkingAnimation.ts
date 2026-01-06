import { useEffect, useState } from 'react'

import { DEFAULT_WALKING_FRAME_DURATION } from '../consts/magicNumbers'

type UseWalkinAnimationProps = {
  isWalking: boolean
  frameDuration?: number
}

export function useWalinkAnimation({
  isWalking,
  frameDuration = DEFAULT_WALKING_FRAME_DURATION,
}: UseWalkinAnimationProps) {
  const [verticalFrameIndex, setVerticalFrameIndex] = useState(0)
  const [horizontalFrameIndex, setHorizontalFrameIndex] = useState(0)

  useEffect(() => {
    if (!isWalking) {
      setVerticalFrameIndex(0)
      return
    }

    const timer = setTimeout(() => {
      setVerticalFrameIndex((prev) => (prev === 1 ? 2 : 1))
    }, frameDuration)

    return () => clearTimeout(timer)
  }, [isWalking, verticalFrameIndex, frameDuration])

  useEffect(() => {
    if (!isWalking) {
      setHorizontalFrameIndex(0)
      return
    }
    const framesCount = 3
    const timer = setTimeout(() => {
      setHorizontalFrameIndex((prev) => (prev + 1) % framesCount)
    }, frameDuration)

    return () => clearTimeout(timer)
  }, [isWalking, horizontalFrameIndex, frameDuration])

  return {
    verticalFrameIndex,
    horizontalFrameIndex,
  }
}
