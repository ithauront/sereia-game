import { DEFAULT_AUDIO_VOLUME } from '../consts/magicNumbers'
import { getSound } from '../Config/soundManager.config'

interface useSoundProps {
  source: string
  volume?: number
}
export function useSound({ source, volume = DEFAULT_AUDIO_VOLUME }: useSoundProps) {
  const play = () => {
    const audio = getSound(source, volume)
    audio.currentTime = 0
    audio.play().catch(() => {})
  }

  return { play }
}
