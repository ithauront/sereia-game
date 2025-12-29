export function trimToLastWord(text: string) {
  const trimmed = text.trimEnd()

  const lastSpaceIndex = trimmed.lastIndexOf(' ')

  if (lastSpaceIndex === -1) {
    return trimmed
  }

  return trimmed.slice(0, lastSpaceIndex)
}
