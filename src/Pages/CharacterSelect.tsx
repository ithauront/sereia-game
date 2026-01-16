import { useState } from 'react'

import playerFront from '../assets/playerTemplates/playerFront.png'

//TODO: se estiver em tela de celular fazer como um carrossel para selecionar o personagem.
export function CharacterSelection() {
  const characters = [
    {
      id: 'boy',
      name: 'Boy',
      sprite: playerFront,
    },
    {
      id: 'girl',
      name: 'Girl',
      sprite: playerFront,
    },
    {
      id: 'monster',
      name: 'Monster',
      sprite: playerFront,
    },
  ]

  const [selectedId, setSelectedId] = useState<string | null>(null)

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
                  onClick={() => setSelectedId(char.id)}
                >
                  <img src={char.sprite} className="ml-2" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
