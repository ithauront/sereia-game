import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { DIALOG_BOX_TYPE_SPEED, MOBILE_WIDHT } from '../../consts/magicNumbers'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { AvatarBox } from '../AvatarBox'
import { Button } from '../Button'
import { trimToLastWord } from './utils'

export interface DialogActionButton {
  label: string
  type?: 'red' | 'green'
  onClick: () => void
}

interface DialogBoxProps {
  avatar?: string
  text: string
  actionButtons?: DialogActionButton[]
}

export function DialogBox({ text, actionButtons, avatar }: DialogBoxProps) {
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_WIDHT})`)
  const buttonSize = isMobile ? 'xs' : 'md'
  const containerRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLParagraphElement | null>(null)

  const [visibleText, setVisibleText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [pageStartIndex, setPageStartIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const hasNext = isPaused && textIndex < text.length
  const isFinished = textIndex >= text.length
  const shouldDisableActions = (!isPaused && !isFinished) || hasNext

  useEffect(() => {
    if (isPaused) return
    if (isFinished) return

    const timeout = setTimeout(() => {
      setVisibleText((prev) => prev + text[textIndex])
      setTextIndex((prev) => prev + 1)
    }, DIALOG_BOX_TYPE_SPEED)

    return () => clearTimeout(timeout)
  }, [textIndex, text, isPaused, isFinished])

  useLayoutEffect(() => {
    const textEl = textRef.current
    const containerEl = containerRef.current
    if (!textEl || !containerEl) return

    const isOverflowing = textEl.scrollHeight > containerEl.clientHeight

    if (isOverflowing && !isPaused) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisibleText((prev) => {
        const safe = trimToLastWord(prev)
        setTextIndex(pageStartIndex + safe.length)
        return safe
      })
      setIsPaused(true)
    }
  }, [visibleText, isPaused, pageStartIndex])

  function handleNext() {
    setPageStartIndex(textIndex)
    setVisibleText('')
    setIsPaused(false)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex flex-col gap-4 ">
      <div
        className="
          dialog-frame
          flex flex-col gap-4 p-4
          bg-linear-to-l
         from-stone-400
         via-stone-300
         to-stone-200
         shadow-inner
        "
      >
        <div className="flex flex-row gap-4 items-center">
          {avatar && <AvatarBox imgSrc={avatar} />}

          <div
            ref={containerRef}
            className="
            relative
            w-full
            max-h-28
            sm:max-h-36
            md:max-h-44
            overflow-hidden
           bg-stone-50
            border
            border-stone-300
            shadow-inner
            rounded-md
            p-3
          "
          >
            <p
              ref={textRef}
              className="text-left text-base sm:text-xl leading-relaxed whitespace-pre-line"
            >
              {visibleText}
            </p>

            {hasNext && (
              <button
                onClick={handleNext}
                className="absolute bottom-2 right-2 text-sm opacity-70 hover:opacity-100 animate-pulse"
              >
                ▶
              </button>
            )}
          </div>
        </div>

        {actionButtons && (
          <div className="flex flex-wrap gap-2 justify-center  ">
            {actionButtons.map((button, index) => (
              <Button
                isDisabled={shouldDisableActions}
                size={buttonSize}
                key={index}
                label={button.label}
                type={button.type}
                onClick={button.onClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
