import { Route, Routes } from 'react-router-dom'

import { NotFound } from '../Pages/NotFound'
import { Start } from '../Pages/Start'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
