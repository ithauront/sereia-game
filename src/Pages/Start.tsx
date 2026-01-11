import { Character } from '../Components/Character'
import { useCharacterMouvement } from '../hooks/useCharacterMovement'

export function Start() {
  const { containerRef, direction, isWalking, position, handleClick } = useCharacterMouvement()

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="relative w-full min-h-screen start-screen-bg overflow-hidden"
    >
      <div
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Character characterType="boy" isWalking={isWalking} direction={direction} />
      </div>
    </div>
  )
}
