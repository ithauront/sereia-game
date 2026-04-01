import { useNavigate, useLocation } from 'react-router-dom'
import { DialogBox, type DialogActionButton } from '../Components/DialogBox'
import { useCharacterContext } from '../Contexts/characterContext'

export function GameOver() {

  const navigate = useNavigate()
  const location = useLocation()
  const isGameBeat = location.state?.isGameBeat ?? false
  const { selectedCharacter } = useCharacterContext()

  const characterPose = isGameBeat ? selectedCharacter?.victory : selectedCharacter?.defeat

  const gameOverText = isGameBeat
    ? 'Parabéns! Sua Tattoo ficou Linda! Agora só falta entrar em contato com o estudio e fazer uma de verdade! E não esqueça de indicar e mandar o link desse jogo para os amigos! Muito obrigado por jogar.'
    : 'Que pena! A sua tattoo te aguarda, quando você achar que tem o que é necessario para encontrar o Sereia Tattoo Studio e fazer a sua Tattoo volte aqui e tente o desafio novamente!'

  const actionButtons: DialogActionButton[] = isGameBeat
    ? [
        {
          label: 'Jogar novamente',
          type: 'green',
          onClick: () => navigate('/'),
        },
      ]
    : [
        {
          label: 'Tentar novamente',
          type: 'green',
          onClick: () => navigate('/'),
        },
      ]
  return (
    <div className="w-full min-h-screen flex items-center justify-center select-screen-bg">
      <div className="flex flex-col w-full justify-center items-center">
        <img
          src={characterPose}
          alt={isGameBeat ? 'character victory pose' : 'character defeat pose'}
          className="h-lvh absolute"
        />
        <div className="absolute bottom-0 w-full px-8 pb-6 flex justify-center">
          <div className="w-xl max-w-4xl">
            <DialogBox text={gameOverText} actionButtons={actionButtons} />
          </div>
        </div>
      </div>
    </div>
  )
}
