import { SiteHeader } from "@/components/site-header"
import { useActiveSection } from "@/hooks/use-active-section"
import { Blog } from "./blog"

const sections = [
  { id: "about-me", title: "About me" },
  { id: "studio", title: "Studio" },
  { id: "services", title: "Services" },
] as const

const sectionIds = sections.map((section) => section.id)

export function LandingPage() {
  const activeSection = useActiveSection(sectionIds)

  const handleTabChange = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId)
    if (!targetSection) {
      return
    }

    targetSection.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SiteHeader activeTab={activeSection} onTabChange={handleTabChange} />
      <div className="flex flex-col gap-[50vh] p-1.5 pb-[100vh]">
        <div className="h-px" />
        <Blog
          sectionId="about-me"
          title="About me"
          content={
            <>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum 2</p>
            </>
          }
        />
        <Blog
          sectionId="studio"
          title="Studio"
          content={
            <>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum 2</p>
            </>
          }
        />
        <Blog
          sectionId="services"
          title="Services"
          content={
            <>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum 2</p>
            </>
          }
        />
      </div>
    </div>
  )
}
