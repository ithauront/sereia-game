import { BrowserRouter } from 'react-router-dom'

import { CharacterProvider } from './Contexts/characterContext'
import { WorldProvider } from './Contexts/worldContext'
import { AppRoutes } from './Routes/app.routes'

export function App() {
  return (
    <BrowserRouter basename="/sereia-game/">
      <WorldProvider>
        <CharacterProvider>
          <AppRoutes />
        </CharacterProvider>
      </WorldProvider>
    </BrowserRouter>
  )
}
