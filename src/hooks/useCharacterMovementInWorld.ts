import { useEffect, useRef, useState } from 'react'

import { useWorld } from '../Contexts/worldContext'
import { clamp } from '../utils/clamp'

export type CharDirection = 'front' | 'back' | 'left' | 'right'

interface UseCharacterMouvementParams {
  initialPosition?: { x: number; y: number }
}

export function useCharacterMouvementInWorld({
  initialPosition = {
    x: 200,
    y: 200,
  },
}: UseCharacterMouvementParams = {}) {
  const { width: worldWidth, height: worldHeight, defaultPlayerSpeed } = useWorld()

  const animationRef = useRef<number | null>(null)

  const [position, setPosition] = useState(initialPosition)
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null)
  const [isWalking, setIsWalking] = useState(false)
  const [direction, setDirection] = useState<CharDirection>('front')

  const moveTo = (x: number, y: number) => {
    const clampedX = clamp(x, 0, worldWidth)
    const clampedY = clamp(y, 0, worldHeight)

    const distanceX = clampedX - position.x
    const distanceY = clampedY - position.y

    setTarget({
      x: clampedX,
      y: clampedY,
    })
    setIsWalking(true)

    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      setDirection(distanceX > 0 ? 'right' : 'left')
    } else {
      setDirection(distanceY > 0 ? 'front' : 'back')
    }

    if (animationRef.current) cancelAnimationFrame(animationRef.current)
  }

  useEffect(() => {
    if (!target) return

    const currentTarget = target

    function move() {
      setPosition((prev) => {
        const distanceX = currentTarget?.x - prev.x
        const distanceY = currentTarget?.y - prev.y
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

        if (distance <= defaultPlayerSpeed) {
          setIsWalking(false)
          setTarget(null)
          return currentTarget
        }

        return {
          x: clamp(prev.x + (distanceX / distance) * defaultPlayerSpeed, 0, worldWidth),
          y: clamp(prev.y + (distanceY / distance) * defaultPlayerSpeed, 0, worldHeight),
        }
      })
      animationRef.current = requestAnimationFrame(move)
    }

    animationRef.current = requestAnimationFrame(move)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [target, defaultPlayerSpeed, worldHeight, worldWidth])

  return {
    position,
    target,
    isWalking,
    direction,
    moveTo,
  }
}
