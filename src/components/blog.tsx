import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { HeartIcon } from "@phosphor-icons/react"
import { useEffect, useState, type ReactNode } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel"

type BlogProps = {
  sectionId: string
  title: string
  content: ReactNode
  images?: string[]
  reversed?: boolean
}

function BlogImages({ images }: { images: string[] }) {
  if (images.length === 1) {
    return (
      <img
        aria-hidden
        src={images[0]}
        className="mx-auto h-full w-full rounded-4xl sm:max-w-sm"
      />
    )
  } else if (images.length > 1) {
    const [api, setApi] = useState<CarouselApi>()
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
      if (!api) {
        return
      }

      const onSelect = () => {
        setSelectedIndex(api.selectedScrollSnap())
      }

      onSelect()
      api.on("select", onSelect)
      api.on("reInit", onSelect)

      return () => {
        api.off("select", onSelect)
        api.off("reInit", onSelect)
      }
    }, [api])

    return (
      <Carousel
        aria-hidden
        className="sm:max-w-sm"
        setApi={setApi}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {images.map((_, index) => (
            <CarouselItem key={index}>
              <img src={images[index]} className="rounded-4xl" />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-3 flex items-center px-1">
          <div className="flex items-center gap-2">
            <CarouselPrevious
              className="static hover:bg-muted/30"
              size="icon-lg"
            />
            <CarouselNext className="static hover:bg-muted/30" size="icon-lg" />
          </div>

          <div
            className="ml-auto flex items-center gap-2"
            aria-label="Slide progress"
          >
            {images.map((_, index) => {
              const [hovered, setHovered] = useState(false)
              return (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={selectedIndex === index ? "true" : "false"}
                  onClick={() => api?.scrollTo(index)}
                >
                  <HeartIcon
                    className="translate-y-0 text-primary transition active:translate-y-px"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    size={24}
                    weight={
                      selectedIndex === index
                        ? "fill"
                        : hovered
                          ? "duotone"
                          : "regular"
                    }
                  />
                </button>
              )
            })}
          </div>
        </div>
      </Carousel>
    )
  }
  return null
}

export function Blog({
  sectionId,
  title,
  content,
  images,
  reversed,
}: BlogProps) {
  const isMobile = useIsMobile()

  return (
    <section className="scroll-mt-24" id={sectionId}>
      <div
        className={cn(
          "flex gap-2 sm:gap-8",
          isMobile ? "flex-col" : reversed ? "flex-row-reverse" : "flex-row"
        )}
      >
        {isMobile && <h2 className="text-3xl font-semibold">{title}</h2>}
        <BlogImages images={images ?? []} />
        <div className="flex flex-col">
          {!isMobile && <h2 className="text-3xl font-semibold">{title}</h2>}
          <div className="pt-4 sm:pt-2">{content}</div>
        </div>
      </div>
    </section>
  )
}
