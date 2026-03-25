import { useCharacterContext } from '../../Contexts/characterContext'
import type { CharDirection } from '../../hooks/useCharacterMovementInWorld'
import { useWalinkAnimation } from '../../hooks/useWalkingAnimation'

interface CharacterProps {
  direction?: CharDirection
  isWalking: boolean
}

export function Character({ direction = 'front', isWalking }: CharacterProps) {
  const { selectedCharacter } = useCharacterContext()
  const { verticalFrameIndex, horizontalFrameIndex } = useWalinkAnimation({
    isWalking,
  })
  if (!selectedCharacter) return null
  const frames = selectedCharacter?.sprites[direction]
  const isVertical = direction === 'front' || direction === 'back'

  const frameIndex = isVertical ? verticalFrameIndex : horizontalFrameIndex

  return <img className="h-20 w-15 pointer-events-none" src={frames[frameIndex]} />
}
