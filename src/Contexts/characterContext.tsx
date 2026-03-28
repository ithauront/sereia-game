/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from 'react'

import { boyCharacter } from '../Characters/boy'
import { girlCharacter } from '../Characters/girl'
import { pandaCharacter } from '../Characters/panda'

export type CharacterSprites = {
  front: string[]
  back: string[]
  left: string[]
  right: string[]
}

export type CharacterDefinition = {
  id: string
  name: string
  sprites: CharacterSprites
  preview: string
  victory: string
  defeat: string
}

export type Position = {
  x: number
  y: number
}

type CharacterContextType = {
  characters: CharacterDefinition[]
  selectedCharacter: CharacterDefinition | null
  unlockedCutscenes: string[]
  isInCutscene: boolean
  playerPosition: Position
  setPlayerPosition: (pos: Position) => void
  setIsInCutscene: (value: boolean) => void
  selectCharacter: (id: string) => void
  unlockCutscene: (id: string) => void
}

const CharacterContext = createContext<CharacterContextType | null>(null)

export function CharacterProvider({ children }: { children: ReactNode }) {
  const characters = [boyCharacter, girlCharacter, pandaCharacter]
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [unlockedCutscenes, setUnlockedCutscenes] = useState<string[]>([])
  const [isInCutscene, setIsInCutscene] = useState(false)
  const [playerPosition, setPlayerPosition] = useState<Position>({ x: 500, y: 200 })

  const selectedCharacter = characters.find((char) => char.id === selectedId) ?? null

  function selectCharacter(id: string) {
    setUnlockedCutscenes([])
    setPlayerPosition({ x: 500, y: 200 })
    setSelectedId(id)
  }

  function unlockCutscene(id: string) {
    setUnlockedCutscenes((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  return (
    <CharacterContext.Provider
      value={{
        characters,
        selectCharacter,
        selectedCharacter,
        unlockCutscene,
        unlockedCutscenes,
        isInCutscene,
        setIsInCutscene,
        playerPosition,
        setPlayerPosition,
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}

export function useCharacterContext() {
  const context = useContext(CharacterContext)
  if (!context) {
    throw new Error('useCharacterContext must be within CharacterProvider')
  }
  return context
}
