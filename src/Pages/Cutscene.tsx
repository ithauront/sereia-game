import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { DialogBox, type DialogActionButton } from '../Components/DialogBox'
import { cutscenesData } from '../consts/cutscenes'
import { useEffect } from 'react'
import { useCharacterContext } from '../Contexts/characterContext'

type CutsceneId = keyof typeof cutscenesData

export function Cutscene() {
  const navigate = useNavigate()
  const { setIsInCutscene } = useCharacterContext()
  const { id } = useParams()
  const neighborhood = id ? cutscenesData[id as CutsceneId] : null
  const isGordinhas = id === 'gordinhas'

  if (!neighborhood) {
    setIsInCutscene(false)
    return <Navigate to="/notfound" replace />
  }

  const actionButton: DialogActionButton[] = isGordinhas
    ? [
        {
          label: 'Fazer uma tatuagem',
          type: 'green',
          onClick: () => navigate('/sereia-tattoo'),
        },
      ]
    : [
        {
          label: 'Continuar Busca',
          type: 'green',
          onClick: () => navigate('/start'),
        },
      ]

  useEffect(() => {
    return () => setIsInCutscene(false)
  }, [])

  return (
    <div className="w-full min-h-screen flex items-center justify-center select-screen-bg">
      <div className="flex flex-col w-full justify-center items-center">
        <img
          src={neighborhood.place}
          alt="Image of neighborhood selected"
          className="h-lvh absolute"
        />
        <div className="absolute bottom-0 w-full px-8 pb-6 flex justify-center">
          <div className="w-xl max-w-4xl">
            <DialogBox text={neighborhood.text} actionButtons={actionButton} />
          </div>
        </div>
      </div>
    </div>
  )
}
