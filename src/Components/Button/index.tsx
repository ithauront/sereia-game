import successSound from '../../assets/sounds/confirmation_002.wav'
import errorSound from '../../assets/sounds/error_006.wav'
import glitchSound from '../../assets/sounds/glitch_001.wav'
import { useSound } from '../../hooks/useSound'

export interface ButtonProps {
  type?: 'red' | 'green'
  label: string
  onClick: () => void
  size?: 'xs' | 'sm' | 'md' | 'lg'
  isDisabled?: boolean
}

export function Button({
  size = 'md',
  type = 'green',
  label,
  isDisabled = false,
  onClick,
}: ButtonProps) {
  const successOrError = useSound({
    source: type == 'green' ? successSound : errorSound,
  })
  const glitch = useSound({
    source: glitchSound,
  })

  function handleOnClick() {
    if (isDisabled) {
      glitch.play()
    } else {
      successOrError.play()
      onClick()
    }
  }

  const baseClasses = `w-full px-4 py-1.5 text-white tracking-wide border-2 rounded-md font-pixel active:translate-y-[2px] transition-all
  duration-500
  ease-in-out active:shadow-none shadow-[0_2px_0_#000] disabled:translate-y-0
  disabled:shadow-none`

  const FONT_SIZE_MAP = {
    xs: 'text-[8px]',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
  } as const

  const fontSize = FONT_SIZE_MAP[size] ?? FONT_SIZE_MAP.md

  const colorClasses =
    type === 'green'
      ? 'bg-green-600 border-green-900 hover:bg-green-500'
      : 'bg-red-600 border-red-900 hover:bg-red-500'

  const disabledClasses =
    type === 'green'
      ? `
      opacity-30
      cursor-not-allowed
      shadow-none
      hover:saturate-0
      `
      : `
      opacity-30
      cursor-not-allowed
      shadow-none
      hover:saturate-0
      `

  return (
    <button
      aria-disabled={isDisabled}
      className={`${baseClasses} ${fontSize} ${colorClasses} ${isDisabled && disabledClasses}`}
      onClick={handleOnClick}
    >
      {label}
    </button>
  )
}
