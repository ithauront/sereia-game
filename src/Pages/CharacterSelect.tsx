import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { DialogBox } from '../Components/DialogBox'
import { useCharacterContext } from '../Contexts/characterContext'
import { RoundButton } from '../Components/roundButton/roundButton'

export function CharacterSelection() {
  const { characters, selectCharacter } = useCharacterContext()
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentCharacter = characters[currentIndex]
  const [selectedId, setSelectedId] = useState<string | null>(null)

  function handleClick(id: string) {
    if (selectedId === id) {
      selectCharacter(id)
      navigate('/mermaid')
    }

    setSelectedId(id)
  }

  function handlePrev() {
    setCurrentIndex((prev) => (prev === 0 ? characters.length - 1 : prev - 1))
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev === characters.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center select-screen-bg">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="font-pixel text-3xl text-center text-orange-600">Escolha Seu Personagem</h1>
        <div className="hidden md:flex gap-15">
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
        <div className="flex md:hidden items-center gap-2">
          <RoundButton onClick={handlePrev} direction="left" size="lg" />

          <div
            className={`p-1 rounded-xl transition-all
      ${
        selectedId === currentCharacter.id
          ? 'ring-active -translate-y-1 scale-[1.02]'
          : 'bg-linear-to-l from-stone-400 via-stone-300 to-stone-200'
      }`}
          >
            <div
              className="relative character-select-frame h-100 w-40 flex items-center justify-center cursor-pointer"
              onClick={() => handleClick(currentCharacter.id)}
            >
              <img src={currentCharacter.preview} className="ml-2" />
            </div>
          </div>

          <RoundButton onClick={handleNext} direction="right" size="lg" />
        </div>
        {selectedId && (
          <DialogBox text="Para confirmar a seleção clique novamente no mesmo personagem" />
        )}
      </div>
    </div>
  )
}
