import placeholderSquare from "@/assets/placeholder-square.avif"
import placeholderWide from "@/assets/placeholder-wide.avif"
import { SiteHeader } from "@/components/site-header"
import { useActiveSection } from "@/hooks/use-active-section"
import { useIsMobile } from "@/hooks/use-mobile"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import { Blog } from "./blog"
import { Contact } from "./contact"
import { AspectRatio } from "./ui/aspect-ratio"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"

const sections = [
  { id: "about-me", title: "About me" },
  { id: "studio", title: "Studio" },
  { id: "services", title: "Services" },
  { id: "contact", title: "Contact" },
] as const

const sectionIds = sections.map((section) => section.id)
const placeholderSquareSrc = placeholderSquare.src
const placeholderWideSrc = placeholderWide.src
const heroImages = [placeholderWideSrc, placeholderWideSrc]

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
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

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
          <Carousel
            aria-hidden
            className="h-full w-full"
            opts={{ loop: heroImages.length > 1 }}
            plugins={[autoplay.current]}
          >
            <CarouselContent className="h-full">
              {heroImages.map((image, index) => (
                <CarouselItem key={`${image}-${index}`} className="h-full">
                  <img
                    src={image}
                    className="h-full w-full rounded-b-4xl object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </AspectRatio>
        <div className="m-auto flex w-full max-w-3xl flex-col gap-12 px-8 pb-12">
          <Blog
            sectionId="about-me"
            title="About me"
            images={[placeholderSquareSrc]}
            content={mockCopy}
          />
          <Blog
            sectionId="studio"
            title="Studio"
            images={[
              placeholderSquareSrc,
              placeholderSquareSrc,
              placeholderSquareSrc,
            ]}
            content={mockCopy}
            reversed
          />
          <Blog
            sectionId="services"
            title="Services"
            content={mockCopy}
            images={[
              placeholderSquareSrc,
              placeholderSquareSrc,
              placeholderSquareSrc,
            ]}
          />
        </div>
        <Contact />
      </div>
    </div>
  )
}
