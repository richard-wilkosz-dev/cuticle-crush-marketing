import { useEffect, useState } from "react"

type UseActiveSectionOptions = {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

export function useActiveSection(
  sectionIds: string[],
  options?: UseActiveSectionOptions
) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "")

  useEffect(() => {
    if (sectionIds.length === 0) {
      return
    }

    const observedSections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null)

    if (observedSections.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const nextSection = visibleEntries[0]?.target.id
        if (nextSection) {
          setActiveSection(nextSection)
        }
      },
      {
        root: options?.root ?? null,
        rootMargin: options?.rootMargin ?? "-25% 0px -55% 0px",
        threshold: options?.threshold ?? [0.2, 0.4, 0.6],
      }
    )

    observedSections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [sectionIds, options?.root, options?.rootMargin, options?.threshold])

  return activeSection
}
