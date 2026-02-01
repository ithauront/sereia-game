import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useCharacterContext } from '../../Contexts/characterContext'

export function RequireCharacterGuard() {
  const { selectedCharacter } = useCharacterContext()
  const location = useLocation()
  if (!selectedCharacter && location.pathname !== '/') {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
