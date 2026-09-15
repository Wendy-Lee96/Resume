import { useEffect, useRef, useState } from 'react'

/**
 * 进入视口时触发一次揭示动画。
 * 返回 ref（挂到目标元素）与 visible（是否可见）。
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return { ref, visible }
}
