import { DEFAULT_AUDIO_VOLUME } from '../consts/magicNumbers'
import { getSound } from '../Config/soundManager.config'

interface useSoundProps {
  source: string
  volume?: number
}
export function useSound({ source, volume = DEFAULT_AUDIO_VOLUME }: useSoundProps) {
  const audio = getSound(source, volume)

  const play = () => {
    audio.currentTime = 0
    audio.play().catch(() => {})
  }
  
  const fadeOut = (duration = 1000) => {
    const steps = 20
    const stepTime = duration / steps
    const volumeStep = audio.volume / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      audio.volume = Math.max(0, audio.volume - volumeStep)

      if (currentStep >= steps) {
        audio.pause()
        audio.currentTime = 0
        clearInterval(interval)
      }
    }, stepTime)
  }

  return { play, fadeOut }
}
