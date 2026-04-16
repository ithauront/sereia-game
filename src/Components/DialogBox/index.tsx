import { useEffect, useRef, useState } from 'react'

import { DIALOG_BOX_TYPE_SPEED, MOBILE_WIDTH } from '../../consts/magicNumbers'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { AvatarBox } from '../AvatarBox'
import { Button } from '../Button'
import { RoundButton } from '../roundButton/roundButton'

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
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_WIDTH})`)
  const buttonSize = isMobile ? 'xs' : 'md'
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [visibleText, setVisibleText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isUserScrolling, setIsUserScrolling] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    if (isFinished) return

    const timeout = setTimeout(() => {
      setVisibleText((prev) => prev + text[textIndex])
      setTextIndex((prev) => {
        const nextIndex = prev + 1
        if (nextIndex >= text.length) {
          setIsFinished(true)
        }
        return nextIndex
      })
    }, DIALOG_BOX_TYPE_SPEED)
    return () => clearTimeout(timeout)
  }, [textIndex, text, isFinished])

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    if (!isUserScrolling) {
      element.scrollTop = element.scrollHeight
    }
  }, [visibleText, isUserScrolling])

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const handleScroll = () => {
      const isAtBottom = element.scrollHeight - element.scrollTop - element.scrollHeight < 20

      setIsUserScrolling(!isAtBottom)
    }
    element.addEventListener('scroll', handleScroll)

    return () => element.removeEventListener('scroll', handleScroll)
  }, [])

  function handleRevealAll() {
    setVisibleText(text)
    setTextIndex(text.length)
    setIsFinished(true)

    const element = containerRef.current
    if (element) {
      element.scrollTop = element.scrollHeight
    }
  }

  const shouldDisableActions = !isFinished

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
            className="
            relative
            w-full"
          >
            <div
              ref={containerRef}
              className="
            max-h-28
            sm:max-h-36
            md:max-h-44
            overflow-y-auto
           bg-stone-50
            border
            border-stone-300
            shadow-inner
            rounded-md
            p-3
            cursor-pointer
          "
              onClick={handleRevealAll}
            >
              <p className="text-left text-base sm:text-xl leading-relaxed">{visibleText}</p>
            </div>
            {!isFinished && (
              <div className="absolute bottom-2 right-3 pointer-events-none">
                <RoundButton direction="right" size="sm" onClick={handleRevealAll} isInDialog />
              </div>
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
