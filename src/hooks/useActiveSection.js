import { useState, useEffect } from 'react'

function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const observers = sectionIds
      .map((id) => {
        const element = document.getElementById(id)
        if (!element) return null

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveId(id)
          },
          { threshold: 0.3 }
        )
        observer.observe(element)
        return observer
      })
      .filter(Boolean)

    return () => observers.forEach((obs) => obs.disconnect())
  }, [sectionIds])

  return activeId
}

export default useActiveSection
