import { useNavigate } from 'react-router-dom'
import mermaid from '../assets/mermaid.png'
import mermaidAvatar from '../assets/sereia_avatar.png'
import { DialogBox, type DialogActionButton } from '../Components/DialogBox'

export function MermaidInstructions() {
  const navigate = useNavigate()
  const actionButtons: DialogActionButton[] = [
    {
      label: 'Aceitar a missão',
      type: 'green',
      onClick: () => navigate('/start'),
    },
    {
      label: 'Desistir',
      type: 'red',
      onClick: () => navigate('/game-over', { state: { isGameBeat: false } }),
    },
  ]

  const missionText = `
Então, você quer uma tatuagem especial?
O único lugar capaz de fazê-la é o misterioso "Sereia Tattoo Studio".
Dizem que ele só pode ser encontrado por quem realmente está determinado.
📍 Encontre o estúdio.
Você aceita a missão?
`
  return (
    <div className="w-full min-h-screen flex items-center justify-center select-screen-bg">
      <div className="flex flex-col w-full justify-center items-center">
        <img src={mermaid} alt="mermaid" className="h-lvh absolute" />
        <div className="absolute bottom-0 w-full px-8 pb-6 flex justify-center">
          <div className="w-xl max-w-4xl">
            <DialogBox text={missionText} actionButtons={actionButtons} avatar={mermaidAvatar} />
          </div>
        </div>
      </div>
    </div>
  )
}
