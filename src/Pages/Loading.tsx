import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { preloadGame } from '../utils/preloadGame'

export function Loading() {
  const navigate = useNavigate()

  useEffect(() => {
    let mounted = true

    async function load() {
      await preloadGame()
      if (mounted) navigate('/character-selection')
    }

    load()

    return () => {
      mounted = false
    }
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Carregando...</h1>

      <div className="flex gap-2 text-3xl">
        <span className="animate-bounce">🧜‍♀️</span>
        <span className="animate-bounce [animation-delay:0.2s]">🌊</span>
        <span className="animate-bounce [animation-delay:0.4s]">🧜‍♀️</span>
        <span className="animate-bounce [animation-delay:0.6s]">🌊</span>
      </div>
    </div>
  )
}
