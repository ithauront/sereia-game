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
}

type CharacterContextType = {
  characters: CharacterDefinition[]
  selectedCharacter: CharacterDefinition | null
  selectCharacter: (id: string) => void
}

const CharacterContext = createContext<CharacterContextType | null>(null)

export function CharacterProvider({ children }: { children: ReactNode }) {
  const characters = [boyCharacter, girlCharacter, pandaCharacter]
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selectedCharacter = characters.find((char) => char.id === selectedId) ?? null

  function selectCharacter(id: string) {
    setSelectedId(id)
  }

  return (
    <CharacterContext.Provider
      value={{
        characters,
        selectCharacter,
        selectedCharacter,
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
