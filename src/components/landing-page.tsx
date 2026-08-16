import { SiteHeader } from "@/components/site-header"
import { useActiveSection } from "@/hooks/use-active-section"
import { useIsMobile } from "@/hooks/use-mobile"
import { Blog } from "./blog"
import { Contact } from "./contact"
import { AspectRatio } from "./ui/aspect-ratio"

const sections = [
  { id: "about-me", title: "About me" },
  { id: "studio", title: "Studio" },
  { id: "services", title: "Services" },
  { id: "contact", title: "Contact" },
] as const

const sectionIds = sections.map((section) => section.id)

const mockImage =
  "https://plus.unsplash.com/premium_vector-1722007385342-a7719a9a4bb3?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const mockImageWide =
  "https://plus.unsplash.com/premium_vector-1745261844755-7082cac96e34?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const mockCopy = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis
      nisl vel neque lobortis gravida. Nulla porta finibus elit, at molestie
      turpis dignissim ac. Nullam vitae orci dui. Cras egestas purus eget nibh
      rutrum pulvinar.
    </p>
    <p>
      Fusce vehicula sed risus id placerat. Vivamus consequat quam non sem
      mollis, ut interdum neque posuere. Vivamus erat turpis, convallis vitae
      tincidunt et, euismod in ante. Pellentesque fermentum dolor at tincidunt
      feugiat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis
      nisl vel neque lobortis gravida. Nulla porta finibus elit, at molestie
      turpis dignissim ac.
    </p>
  </>
)

export function LandingPage() {
  const isMobile = useIsMobile()
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
      <div className="flex flex-col gap-8">
        <AspectRatio
          ratio={isMobile ? 2 / 1 : 5 / 1}
          className="overflow-hidden"
        >
          <img
            src={mockImageWide}
            aria-hidden
            className="h-full w-full rounded-b-4xl object-cover"
          />
        </AspectRatio>
        <div className="m-auto flex w-full max-w-3xl flex-col gap-12 px-8 pb-12">
          <Blog
            sectionId="about-me"
            title="About me"
            images={[mockImage]}
            content={mockCopy}
          />
          <Blog
            sectionId="studio"
            title="Studio"
            images={[mockImage, mockImage, mockImage]}
            content={mockCopy}
            reversed
          />
          <Blog
            sectionId="services"
            title="Services"
            content={mockCopy}
            images={[mockImage, mockImage, mockImage]}
          />
        </div>
        <Contact />
      </div>
    </div>
  )
}
