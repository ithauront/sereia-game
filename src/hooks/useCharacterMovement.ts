import React, { useEffect, useRef, useState } from 'react'

export type CharDirection = 'front' | 'back' | 'left' | 'right'

interface UseCharacterMouvementParams {
  initialPosition?: { x: number; y: number }
  speed?: number
}

export function useCharacterMouvement({
  initialPosition = {
    x: 200,
    y: 200,
  },
  speed = 2,
}: UseCharacterMouvementParams = {}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  const [position, setPosition] = useState(initialPosition)
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null)
  const [isWalking, setIsWalking] = useState(false)
  const [direction, setDirection] = useState<CharDirection>('front')

  function handleClick(evento: React.MouseEvent) {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()

    const x = evento.clientX - rect.left
    const y = evento.clientY - rect.top

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
    setTarget({
      x,
      y,
    })
    setIsWalking(true)

    const distanceX = x - position.x
    const distanceY = y - position.y

    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      setDirection(distanceX > 0 ? 'right' : 'left')
    } else {
      setDirection(distanceY > 0 ? 'front' : 'back')
    }
  }

  useEffect(() => {
    if (!target) return

    const currentTarget = target

    function move() {
      setPosition((prev) => {
        const distanceX = currentTarget?.x - prev.x
        const distanceY = currentTarget?.y - prev.y
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

        if (distance <= speed) {
          setIsWalking(false)
          setTarget(null)
          return currentTarget
        }

        return {
          x: prev.x + (distanceX / distance) * speed,
          y: prev.y + (distanceY / distance) * speed,
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
  }, [target, speed])

  return {
    containerRef,
    position,
    isWalking,
    direction,
    handleClick,
  }
}
