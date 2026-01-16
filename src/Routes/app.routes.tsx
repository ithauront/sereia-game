import { Route, Routes } from 'react-router-dom'

import { CharacterSelection } from '../Pages/CharacterSelect'
import { NotFound } from '../Pages/NotFound'
import { Start } from '../Pages/Start'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CharacterSelection />} />
      <Route path="/start" element={<Start />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
