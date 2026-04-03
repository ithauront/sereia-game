import type React from 'react'
import { useEffect, useState } from 'react'

import { Character } from '../Components/Character'
import { useWorld } from '../Contexts/worldContext'
import { useCamera } from '../hooks/useCamera'
import { useCameraConfig } from '../hooks/useCameraConfig'
import { useCharacterMouvementInWorld } from '../hooks/useCharacterMovementInWorld'
import { loadCollisionMapData } from '../utils/loadCollisionMapData'
import { useCutsceneTrigger } from '../hooks/useCutsceneTrigger'
import { useCharacterContext } from '../Contexts/characterContext'

export function Start() {
  //TODO: conseguir uma trilha sonora para o jogo inteiro. ideal pagode em 8bits
  const [collisionData, setCollisionData] = useState<ImageData | null>(null)
  const { isCharacterReady } = useCharacterContext()

  const { width: worldWidth, height: worldHeight } = useWorld()
  const { cameraSize, zoomFactor } = useCameraConfig()

  const { position: cameraPosition, cameraMoveTo } = useCamera({
    cameraSize,
    zoom: zoomFactor,
  })
  const { direction, isWalking, position, moveTo } = useCharacterMouvementInWorld({ collisionData })

  useCutsceneTrigger(position)

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

  useEffect(() => {
    loadCollisionMapData(`${import.meta.env.BASE_URL}city_map_walkable.jpg`).then(setCollisionData)
  }, [])
  // TODO: no inicio demora um pouco pra carregar as imagens de walking. talvez fazer algo para a gente dar um fetch nelas antes e so abrir a pagina quando estiver carregado. talvez uma tela de loading.
  //TODO ajustar revisar textos
  //TODO: protger o github e principalmente a branch main
  //TODO: enre farol de itapua e aeroporto esta andando pelo mar
  // TODO: revisar acentos.
  return (
    <div className="relative overflow-hidden w-screen h-screen">
      <div
        className="water-layer"
        style={{
          width: worldWidth * 3,
          height: worldHeight * 3,
          transform: `
        translate(
          ${-(cameraPosition.x - cameraSize.x / 2) * zoomFactor}px,
          ${-(cameraPosition.y - cameraSize.y / 2) * zoomFactor}px
        )
        scale(${zoomFactor})
      `,
        }}
      />
      <div
        onClick={handleClick}
        className="start-screen-bg "
        style={{
          position: 'absolute',
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
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
        >
          <Character isWalking={isCharacterReady && isWalking} direction={direction} />
        </div>
      </div>
    </div>
  )
}
