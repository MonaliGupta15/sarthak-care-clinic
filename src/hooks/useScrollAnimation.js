import { useEffect, useRef } from "react"

const useScrollAnimation = (className = "is-visible") => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className)
          } else {
            entry.target.classList.remove(className) // ← removes when out of view
          }
        })
      },
      { threshold: 0.15 }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => { if (el) observer.unobserve(el) }
  }, [className])

  return ref
}

export default useScrollAnimation