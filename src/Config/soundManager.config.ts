const sounds = new Map<string, HTMLAudioElement>()

export function getSound(source: string, volume: number) {
  if (!sounds.has(source)) {
    const audio = new Audio(source)
    audio.volume = volume
    sounds.set(source, audio)
  }

  return sounds.get(source)!
}
