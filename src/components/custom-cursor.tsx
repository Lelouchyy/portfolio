import { useEffect, useRef } from 'react'

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return
    }

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: target.x, y: target.y }
    let isVisible = false
    let isInteractive = false
    let isPressed = false
    let animationFrameId = 0

    const updateCursor = () => {
      ring.x += (target.x - ring.x) * 0.18
      ring.y += (target.y - ring.y) * 0.18

      const dotElement = dotRef.current
      const ringElement = ringRef.current

      if (dotElement) {
        dotElement.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%) scale(${isPressed ? 0.8 : 1})`
        dotElement.style.opacity = isVisible ? '1' : '0'
      }

      if (ringElement) {
        const scale = isPressed ? 0.82 : isInteractive ? 1.75 : 1
        ringElement.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${scale})`
        ringElement.style.opacity = isVisible ? '1' : '0'
      }

      animationFrameId = window.requestAnimationFrame(updateCursor)
    }

    const handlePointerMove = (event: PointerEvent) => {
      target.x = event.clientX
      target.y = event.clientY
      isVisible = true
      isInteractive = event.target instanceof Element
        ? Boolean(event.target.closest('a, button, [role="button"], input, textarea, select, label'))
        : false
    }

    const handlePointerDown = () => {
      isPressed = true
    }

    const handlePointerUp = () => {
      isPressed = false
    }

    const handlePointerLeave = () => {
      isVisible = false
      isPressed = false
    }

    animationFrameId = window.requestAnimationFrame(updateCursor)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    document.documentElement.addEventListener('mouseleave', handlePointerLeave)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="site-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="site-cursor-dot" aria-hidden="true" />
    </>
  )
}

export default CustomCursor