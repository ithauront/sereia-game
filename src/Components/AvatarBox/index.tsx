import frameUrl from '../../assets/avatar-frame.svg'

interface AvatarBoxProps {
  imgSrc: string
}

export function AvatarBox({ imgSrc }: AvatarBoxProps) {
  return (
    <div
      className="
        relative aspect-square
        shrink-0
        flex items-center justify-center
         w-[clamp(56px,12vw,120px)]
      "
    >
      <img
        src={imgSrc}
        alt="avatar profile picture"
        className="
          inset-[12%]
          w-[85%]
          object-cover
          rounded-[15%]
        "
      />

      <img
        src={frameUrl}
        alt="frame for avatar"
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
        draggable={false}
      />
    </div>
  )
}
