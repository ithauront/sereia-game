import { Route, Routes } from 'react-router-dom'

import { CharacterSelection } from '../Pages/CharacterSelect'
import { NotFound } from '../Pages/NotFound'
import { Start } from '../Pages/Start'
import { RequireCharacterGuard } from './Guards/RequireCharacterGuard'
import { MermaidInstructions } from '../Pages/MermaidInstruction'
import { GameOver } from '../Pages/GameOver'
import { Cutscene } from '../Pages/Cutscene'
import { SereiaTattoo } from '../Pages/SereiaTattoo'
import { Loading } from '../Pages/Loading'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Loading />}/>
      <Route path="/character-selection" element={<CharacterSelection />} />

      <Route element={<RequireCharacterGuard />}>
        <Route path="/mermaid" element={<MermaidInstructions />} />
        <Route path="/start" element={<Start />} />
        <Route path="/cutscene/:id" element={<Cutscene />} />
        <Route path="/sereia-tattoo" element={<SereiaTattoo />} />
        <Route path="/game-over" element={<GameOver />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
