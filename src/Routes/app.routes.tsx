import { Route, Routes } from 'react-router-dom'

import { CharacterSelection } from '../Pages/CharacterSelect'
import { NotFound } from '../Pages/NotFound'
import { Start } from '../Pages/Start'
import { RequireCharacterGuard } from './Guards/RequireCharacterGuard'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CharacterSelection />} />

      <Route element={<RequireCharacterGuard />}>
        <Route path="/start" element={<Start />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
