import clsx from 'clsx'

type RoundButtonProps = {
  onClick: () => void
  direction?: 'left' | 'right'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  isInDialog?: boolean
}

export function RoundButton({
  onClick,
  direction,
  size = 'md',
  disabled,
  isInDialog = false,
}: RoundButtonProps) {
  const sizeClasses = {
    sm: 'w-5 h-5 text-[10px]',
    md: 'w-14 h-14 text-2xl',
    lg: 'w-20 h-20 text-3xl',
  }

  const arrow = direction === 'left' ? '◀' : '▶'

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'flex items-center justify-center ',
        'rounded-full',
        'border-2 border-black',
        'bg-linear-to-b from-green-300 to-green-500',
        'text-black font-bold',
        'shadow-[0_3px_0_#4e4c4c]',
        'transition-all duration-100',
        'active:translate-y-1 active:shadow-[0_2px_0_#000]',
        'hover:brightness-110',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        `${isInDialog ? 'animate-pulse' : ''}`,
        sizeClasses[size],
      )}
    >
      {arrow}
    </button>
  )
}
