import { useNavigate, useLocation } from 'react-router-dom'
import { DialogBox, type DialogActionButton } from '../Components/DialogBox'
import { useCharacterContext } from '../Contexts/characterContext'
import { useState } from 'react'

export function GameOver() {
  const navigate = useNavigate()
  const location = useLocation()
  const isGameBeat = location.state?.isGameBeat ?? false
  const { selectedCharacter } = useCharacterContext()
  const [copied, setCopied] = useState(false)

  const characterPose = isGameBeat ? selectedCharacter?.victory : selectedCharacter?.defeat

  const baseUrl = window.location.origin + import.meta.env.BASE_URL

  //TODO: verificar se ao usar mobile ele abre apps para compartilhar.
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Sereia Tattoo Game',
          text: 'Consegui encontrar o Sereia Tattoo Studio 😄 tenta aí!',
          url: baseUrl,
        })
      } catch (err) {
        console.log('Share cancelado')
      }
    } else {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(baseUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 3500)
      } else {
        console.log('Clipboard não suportado')
      }
    }
  }

  const gameOverText = isGameBeat
    ? 'Parabéns! Sua tattoo ficou linda! Agora só falta entrar em contato com o estúdio e fazer uma de verdade! Mostre esse jogo pra seus amigos! Muito obrigado por jogar!'
    : 'Que pena! Sua tattoo te aguarda… Quando você achar que tem o que é necessário para encontrar o Sereia Tattoo Studio e fazer a sua tattoo, volte aqui e tente o desafio novamente!'

  const actionButtons: DialogActionButton[] = isGameBeat
    ? [
        {
          label: 'Compartilhar',
          type: 'green',
          onClick: handleShare,
        },
        {
          label: 'Jogar novamente',
          type: 'red',
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
        {copied && (
          <div className="absolute top-0 w-full px-8 pt-6 flex justify-center">
            <div className="w-xl max-w-4xl">
              <DialogBox text="Link copiado! Agora é so compartilhar" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
