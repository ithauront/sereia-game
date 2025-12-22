import { useEffect, useRef } from 'react'

import { DEFAULT_AUDIO_VOLUME } from '../consts/magicNumbers'

interface useSoundProps {
  source: string
  volume?: number
}

export function useSound({ source, volume = DEFAULT_AUDIO_VOLUME }: useSoundProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(source)
    audio.volume = volume

    audioRef.current = audio

    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [source, volume])

  const play = () => {
    if (!audioRef.current) return
    audioRef.current.currentTime = 0
    audioRef.current?.play()
  }

  return {
    play,
  }
}
