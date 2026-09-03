import { useEffect, useState } from 'react';

type UseActiveSectionOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export function useActiveSection(
  sectionIds: string[],
  options?: UseActiveSectionOptions,
) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    if (sectionIds.length === 0) {
      return;
    }

    const lastSectionId = sectionIds[sectionIds.length - 1];

    const observedSections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    if (observedSections.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const scrollTop = window.scrollY;
      const viewportBottom = scrollTop + window.innerHeight;
      const documentBottom = document.documentElement.scrollHeight;
      const isAtBottom = viewportBottom >= documentBottom - 2;

      if (isAtBottom && lastSectionId) {
        setActiveSection(lastSectionId);
        return;
      }

      const activationLine = window.innerHeight * 0.35;
      let nextSectionId = observedSections[0]?.id ?? '';

      for (const section of observedSections) {
        if (section.getBoundingClientRect().top <= activationLine) {
          nextSectionId = section.id;
        }
      }

      if (nextSectionId) {
        setActiveSection(nextSectionId);
      }
    };

    window.addEventListener('scroll', updateActiveSection, {
      passive: true,
    });
    window.addEventListener('resize', updateActiveSection);
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [sectionIds, options?.root, options?.rootMargin, options?.threshold]);

  return activeSection;
}
