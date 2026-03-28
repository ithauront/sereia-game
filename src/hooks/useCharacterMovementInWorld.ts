import { useEffect, useRef, useState } from 'react'

import { useWorld } from '../Contexts/worldContext'
import { clamp } from '../utils/clamp'
import { isWalkable } from '../utils/isWalkable'
import { useCharacterContext } from '../Contexts/characterContext'

export type CharDirection = 'front' | 'back' | 'left' | 'right'

interface UseCharacterMouvementParams {
  collisionData: ImageData | null
}

export function useCharacterMouvementInWorld({ collisionData }: UseCharacterMouvementParams) {
  const { width: worldWidth, height: worldHeight, defaultPlayerSpeed } = useWorld()
  const { playerPosition } = useCharacterContext()

  const animationRef = useRef<number | null>(null)

  const [position, setPosition] = useState(playerPosition)
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null)
  const [isWalking, setIsWalking] = useState(false)
  const [direction, setDirection] = useState<CharDirection>('front')

  const moveTo = (x: number, y: number) => {
    if (!collisionData || !isWalkable({ x, y, collisionData })) {
      return
    }

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
        if (!collisionData) return prev
        const distanceX = currentTarget?.x - prev.x
        const distanceY = currentTarget?.y - prev.y
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

        if (distance <= defaultPlayerSpeed) {
          setIsWalking(false)
          setTarget(null)
          return currentTarget
        }

        const nextX = clamp(prev.x + (distanceX / distance) * defaultPlayerSpeed, 0, worldWidth)
        const nextY = clamp(prev.y + (distanceY / distance) * defaultPlayerSpeed, 0, worldHeight)

        return {
          x: nextX,
          y: nextY,
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
  }, [target, defaultPlayerSpeed, worldHeight, worldWidth, collisionData])

  return {
    position,
    target,
    isWalking,
    direction,
    moveTo,
  }
}
