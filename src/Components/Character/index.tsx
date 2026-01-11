import playerBackLleg from '../../assets/playerTemplates/playerBackLleg.png'
import playerBackRleg from '../../assets/playerTemplates/playerBackRleg.png'
import playerFront from '../../assets/playerTemplates/playerFront.png'
import playerFrontlLeg from '../../assets/playerTemplates/playerFrontLLeg.png'
import playerFrontRleg from '../../assets/playerTemplates/playerFrontRleg.png'
import playerLeft from '../../assets/playerTemplates/playerLeft.png'
import playerLeftLleg from '../../assets/playerTemplates/playerLeftLleg.png'
import playerLeftRleg from '../../assets/playerTemplates/playerLeftRleg.png'
import playerRight from '../../assets/playerTemplates/playerRight.png'
import playerRightLleg from '../../assets/playerTemplates/playerRightLleg.png'
import playerRightRleg from '../../assets/playerTemplates/playerRightRleg.png'
import type { CharDirection } from '../../hooks/useCharacterMovement'
import { useWalinkAnimation } from '../../hooks/useWalkingAnimation'

//TODO: update for different characters

interface CharacterProps {
  characterType?: string
  direction?: CharDirection
  isWalking: boolean
}

export function Character({
  characterType = 'boy',
  direction = 'front',
  isWalking,
}: CharacterProps) {
  const { verticalFrameIndex, horizontalFrameIndex } = useWalinkAnimation({
    isWalking,
  })

  let frames: string[] = []
  let isVertical = true
  if (characterType == 'boy') {
    switch (direction) {
      case 'front':
        frames = [playerFront, playerFrontRleg, playerFrontlLeg]
        isVertical = true
        break
      case 'back':
        frames = [playerFront, playerBackRleg, playerBackLleg]
        isVertical = true
        break
      case 'left':
        frames = [playerLeft, playerLeftLleg, playerLeftRleg]
        isVertical = false
        break
      case 'right':
        frames = [playerRight, playerRightLleg, playerRightRleg]
        isVertical = false
        break
    }
  }

  const frameIndex = isVertical ? verticalFrameIndex : horizontalFrameIndex

  return <img className="h-30 w-20 pointer-events-none" src={frames[frameIndex]} />
}
