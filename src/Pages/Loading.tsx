import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { preloadGame } from '../utils/preloadGame'
import { Button } from '../Components/Button'
import { useMediaQuery } from '../hooks/useMediaQuery'

export function Loading() {
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useMediaQuery('(pointer: coarse)')

  useEffect(() => {
    let mounted = true

    async function load() {
      await preloadGame()

      if (mounted) {
        setIsLoaded(true)
      }
    }

    load()

    return () => {
      mounted = false
    }
  }, [])

  function handleStart() {
    navigate('/character-selection')
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">
        {isLoaded ? 'O jogo está pronto para começar!' : 'Carregando...'}
      </h1>

      <div className="flex gap-2 text-3xl mb-6">
        <span className="animate-bounce">🧜‍♀️</span>
        <span className="animate-bounce [animation-delay:0.2s]">🌊</span>
        <span className="animate-bounce [animation-delay:0.4s]">🧜‍♀️</span>
        <span className="animate-bounce [animation-delay:0.6s]">🌊</span>
      </div>
      <div className={isMobile ? 'w-xsm' : 'w-xl'}>
        <Button label="Começar" isDisabled={!isLoaded} onClick={handleStart} />
      </div>
    </div>
  )
}
