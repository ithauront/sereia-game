import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { DialogBox } from '../Components/DialogBox'
import { useCharacterContext } from '../Contexts/characterContext'

//TODO: se estiver em tela de celular fazer como um carrossel para selecionar o personagem.
export function CharacterSelection() {
  const { characters, selectCharacter } = useCharacterContext()
  const navigate = useNavigate()
  const [selectedId, setSelectedId] = useState<string | null>(null)

  function handleClick(id: string) {
    if (selectedId === id) {
      selectCharacter(id)
      navigate('/start')
    }

    setSelectedId(id)
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center select-screen-bg">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="font-pixel text-3xl text-orange-600">Escolha Seu Personagem</h1>
        <div className="flex gap-15">
          {characters.map((char) => {
            const isSelected = selectedId === char.id

            return (
              <div
                key={char.id}
                className={`p-1 rounded-xl transition-all
                    ${isSelected ? 'ring-active -translate-y-1 scale-[1.02]' : 'bg-linear-to-l from-stone-400 via-stone-300 to-stone-200'}`}
              >
                <div
                  className={`relative character-select-frame h-120 w-60 flex items-center justify-center cursor-pointer
          `}
                  onClick={() => handleClick(char.id)}
                >
                  <img src={char.preview} className="ml-2" />
                </div>
              </div>
            )
          })}
        </div>
        {selectedId && (
          <DialogBox text="Para confirmar a seleção clique novamente no mesmo personagem" />
        )}
      </div>
    </div>
  )
}
