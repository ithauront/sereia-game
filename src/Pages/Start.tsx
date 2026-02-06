import type React from 'react'
import { useEffect } from 'react'

import { Character } from '../Components/Character'
import { useWorld } from '../Contexts/worldContext'
import { useCamera } from '../hooks/useCamera'
import { useCameraConfig } from '../hooks/useCameraConfig'
import { useCharacterMouvementInWorld } from '../hooks/useCharacterMovementInWorld'
//TODO: ajustar a camera no celular. o mouvement não acompanha, talvez por conta das proporções. precisamos de um camera size diferente para mobile e desktop. precisamos tambem retirar o zoom quando esta no mobile. essas duas coisas ja ajudam, mas ainda dão um certo lag quando o character anda. preceisamos investigar o porque e resolver.
export function Start() {
  const { width: worldWidth, height: worldHeight } = useWorld()
  const { cameraSize, zoomFactor } = useCameraConfig()

  const { position: cameraPosition, cameraMoveTo } = useCamera({
    cameraSize,
    zoom: zoomFactor,
  })
  const { direction, isWalking, position, moveTo } = useCharacterMouvementInWorld()

  function handleClick(evento: React.MouseEvent<HTMLDivElement>) {
    const rect = (evento.currentTarget as HTMLDivElement).getBoundingClientRect()

    const screenX = evento.clientX - rect.left
    const screenY = evento.clientY - rect.top

    const worldX = screenX / zoomFactor
    const worldY = screenY / zoomFactor

    moveTo(worldX, worldY)
  }

  useEffect(() => {
    cameraMoveTo(position)
  }, [position, cameraMoveTo])

  return (
    <div className="relative overflow-hidden w-screen h-screen">
      <div
        onClick={handleClick}
        className="world start-screen-bg"
        style={{
          position: 'absolute',
          left: '20%',
          top: 0,
          width: worldWidth,
          height: worldHeight,

          transform: `
          translate(
            ${-(cameraPosition.x - cameraSize.x / 2) * zoomFactor}px,
            ${-(cameraPosition.y - cameraSize.y / 2) * zoomFactor}px
          )
          scale(${zoomFactor})
        `,
          transformOrigin: 'top left',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Character isWalking={isWalking} direction={direction} />
        </div>
      </div>

      <div className="fog-layer" />
    </div>
  )
}
