import { useNavigate } from 'react-router-dom'
import ending from '../assets/ending.jpg'
import mauricioAvatar from '../assets/mauricio_avatar.png'
import { DialogBox, type DialogActionButton } from '../Components/DialogBox'
import { useState } from 'react'
import { useSound } from '../hooks/useSound'
import tattooBuzz from '../assets/sounds/buzz.mp3'
import tattooMachine from '../assets/tattooMachine.png'

export function SereiaTattoo() {
  const navigate = useNavigate()
  const tattooSound = useSound({
    source: tattooBuzz,
  })
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleTattoo = () => {
    setIsTransitioning(true)
    tattooSound.play()

    setTimeout(() => {
      tattooSound.fadeOut(1000)
      setTimeout(() => {
        navigate('/game-over', { state: { isGameBeat: true } })
      }, 1000)
    }, 1000)
  }

  const actionButtons: DialogActionButton[] = [
    {
      label: 'Tatuar!',
      type: 'green',
      onClick: handleTattoo,
    },
    {
      label: 'Desistir',
      type: 'red',
      onClick: () => navigate('/game-over', { state: { isGameBeat: false } }),
    },
  ]

  const endingText = `
Finalmente você chegou! Eu sou Mauricio, é otimo ter você aqui. Seu projeto ja esta pronto. Vamos riscar?
`

  return (
    <div className="w-full min-h-screen flex items-center justify-center select-screen-bg">
      {isTransitioning && (
        <div className="fixed inset-0 bg-black z-9999 flex items-center justify-center">
          <img src={tattooMachine} className="tattoo-animation w-20" />
        </div>
      )}
      <div className="flex flex-col w-full justify-center items-center">
        <img src={ending} alt="mermaid" className="h-lvh absolute" />
        <div className="absolute bottom-0 w-full px-8 pb-6 flex justify-center">
          <div className="w-xl max-w-4xl">
            <DialogBox text={endingText} actionButtons={actionButtons} avatar={mauricioAvatar} />
          </div>
        </div>
      </div>
    </div>
  )
}
