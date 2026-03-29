import { useNavigate } from 'react-router-dom'
import { useCharacterContext, type Position } from '../Contexts/characterContext'
import { useEffect } from 'react'
import { cutsceneZones } from '../consts/cutscenes'

export function useCutsceneTrigger({ x, y }: Position) {
  const navigate = useNavigate()
  const { unlockedCutscenes, unlockCutscene, isInCutscene, setIsInCutscene, setPlayerPosition } =
    useCharacterContext()

  useEffect(() => {
    if (isInCutscene) return
    for (const zone of cutsceneZones) {
      const alreadySeen = unlockedCutscenes?.includes(zone.id)

      if (alreadySeen) continue

      const distanceX = x - zone.x
      const distanceY = y - zone.y
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

      if (distance <= zone.radius) {
        setPlayerPosition({ x, y })
        setIsInCutscene(true)
        unlockCutscene(zone.id)
        navigate(`/cutscene/${zone.id}`)
        break
      }
    }
  }, [x, y, navigate, unlockCutscene, unlockedCutscenes])
}
