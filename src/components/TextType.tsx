'use client'
import { useState, useEffect } from 'react'

interface TextTypeProps {
  text: string[]
  typingSpeed?: number
  pauseDuration?: number
  showCursor?: boolean
  cursorCharacter?: string
  loop?: boolean // Add this prop
}

export default function TextType({
  text,
  typingSpeed = 100,
  pauseDuration = 2000,
  showCursor = true,
  cursorCharacter = '|',
  loop = true // Default to true for backwards compatibility
}: TextTypeProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [hasCompleted, setHasCompleted] = useState(false)

  useEffect(() => {
    if (hasCompleted && !loop) return // Stop if completed and not looping

    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (displayText.length < text[currentIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(text[currentIndex].slice(0, displayText.length + 1))
        }, typingSpeed)
      } else {
        if (text.length === 1 && !loop) {
          setHasCompleted(true)
          return
        }
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, pauseDuration)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, typingSpeed / 2)
      } else {
        const nextIndex = (currentIndex + 1) % text.length
        if (nextIndex === 0 && !loop) {
          setHasCompleted(true)
          return
        }
        setCurrentIndex(nextIndex)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isTyping, text, typingSpeed, pauseDuration, loop, hasCompleted])

  return (
    <span>
      {displayText}
      {showCursor && <span className="animate-pulse">{cursorCharacter}</span>}
    </span>
  )
}