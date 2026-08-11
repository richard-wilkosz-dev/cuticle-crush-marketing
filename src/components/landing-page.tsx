import { SiteHeader } from "@/components/site-header"
import { useActiveSection } from "@/hooks/use-active-section"
import { useIsMobile } from "@/hooks/use-mobile"
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
const mockCopy = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis
      nisl vel neque lobortis gravida. Nulla porta finibus elit, at molestie
      turpis dignissim ac. Nullam vitae orci dui. Cras egestas purus eget nibh
      rutrum pulvinar. Fusce vehicula sed risus id placerat. Vivamus consequat
      quam non sem mollis, ut interdum neque posuere. Vivamus erat turpis,
      convallis vitae tincidunt et, euismod in ante. Pellentesque fermentum
      dolor at tincidunt feugiat.
    </p>
    <p>
      Nulla risus mi, tincidunt sed nulla at, tristique mollis elit. Donec
      euismod justo nec lorem posuere luctus. Vivamus sed lacinia eros. Maecenas
      ac nibh lacus. Quisque sed facilisis arcu. Vestibulum maximus sem sapien,
      at semper nisi accumsan et. Nulla et dui sed nulla fermentum suscipit.
      Donec quis gravida est, in consectetur nisi. Mauris imperdiet enim non
      ipsum volutpat viverra. Mauris maximus eget ligula ut rutrum. Vivamus
      purus erat, cursus a commodo non, dictum non nunc. Quisque pulvinar felis
      non ex sollicitudin, sit amet luctus est tempus. Nunc quis tincidunt
      ipsum, id vestibulum enim.
    </p>
    <p>
      Sed tempor placerat arcu ac vestibulum. Phasellus sed rutrum tortor. Nunc
      enim urna, malesuada eget tempor at, congue nec enim. Ut suscipit
      facilisis imperdiet. Suspendisse pulvinar porttitor condimentum. Fusce
      orci turpis, tristique et dolor nec, finibus elementum urna. Quisque
      dictum eget libero id semper. Nulla sollicitudin rutrum odio, quis
      bibendum justo pellentesque ac. Cras finibus enim ipsum, sed facilisis
      urna vestibulum vitae. Curabitur egestas porta ipsum, sed laoreet dolor
      posuere sed.
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
        <div className="m-auto w-full max-w-2xl">
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
          />
          <Blog sectionId="services" title="Services" content={mockCopy} />
        </div>
      </div>
    </div>
  )
}
