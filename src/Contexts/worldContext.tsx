import { createContext, useContext, type ReactNode } from 'react'

import { WORLD } from '../Config/world.config'

export type WorldContextType = {
  width: number
  height: number
  defaultPlayerSpeed: number
}

const WorldContext = createContext<WorldContextType | undefined>(undefined)

export const WorldProvider = ({ children }: { children: ReactNode }) => {
  return (
    <WorldContext.Provider
      value={{
        width: WORLD.width,
        height: WORLD.height,
        defaultPlayerSpeed: WORLD.defaultPlayerSpeed,
      }}
    >
      {children}
    </WorldContext.Provider>
  )
}

export const useWorld = () => {
  const context = useContext(WorldContext)
  if (!context) throw new Error('useWorld deve ser usado dentro de um WorldProvider')
  return context
}
