import { useNavigate } from 'react-router-dom'
import mermaidNotFound from '../assets/mermaid_not_found.png'
import mermaidAvatar from '../assets/sereia_avatar.png'
import { DialogBox, type DialogActionButton } from '../Components/DialogBox'

export function NotFound() {
  const navigate = useNavigate()
  const actionButtons: DialogActionButton[] = [
    {
      label: 'Voltar para o jogo',
      type: 'green',
      onClick: () => navigate('/start'),
    },
  ]

  const notFoundText = `
Parece que você se perdeu. Aperte o botão para voltar ao jogo.
`
  return (
    <div className="w-full min-h-screen flex items-center justify-center select-screen-bg">
      <div className="flex flex-col w-full justify-center items-center">
        <img src={mermaidNotFound} alt="not found ilustration" className="h-lvh absolute" />
      </div>
      <div className="absolute bottom-0 w-full px-8 pb-6 flex justify-center">
        <div className="w-xl max-w-4xl">
          <DialogBox text={notFoundText} actionButtons={actionButtons} avatar={mermaidAvatar} />
        </div>
      </div>
    </div>
  )
}
