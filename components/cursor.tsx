'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'motion/react'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useSpring(0, { damping: 20, stiffness: 250, restDelta: 0.001 })
  const cursorY = useSpring(0, { damping: 20, stiffness: 250, restDelta: 0.001 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        x: '-50%',
        y: '-50%',
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 250 }}
    />
  )
}
