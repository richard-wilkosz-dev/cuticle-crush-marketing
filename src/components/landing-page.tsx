import { SiteHeader } from "@/components/site-header"
import { useActiveSection } from "@/hooks/use-active-section"
import { Blog } from "./blog"
import { AspectRatio } from "./ui/aspect-ratio"

const sections = [
  { id: "about-me", title: "About me" },
  { id: "studio", title: "Studio" },
  { id: "services", title: "Services" },
] as const

const sectionIds = sections.map((section) => section.id)

const mockImage =
  "https://plus.unsplash.com/premium_vector-1722007385342-a7719a9a4bb3?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const mockImageWide =
  "https://plus.unsplash.com/premium_vector-1745261844755-7082cac96e34?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

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
      <div className="flex flex-col gap-[50vh] pb-[100vh]">
        <AspectRatio ratio={3 / 1} className="overflow-hidden">
          <img
            src={mockImageWide}
            aria-hidden
            className="h-full w-full rounded-b-4xl object-cover"
          />
        </AspectRatio>
        <Blog
          sectionId="about-me"
          title="About me"
          images={[mockImage]}
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
          images={[mockImage, mockImage, mockImage]}
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
