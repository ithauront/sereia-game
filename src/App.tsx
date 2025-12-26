import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './Routes/app.routes'

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
