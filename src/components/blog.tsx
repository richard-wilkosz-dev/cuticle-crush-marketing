import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
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
}

function BlogImages({ images }: { images: string[] }) {
  if (images.length === 1) {
    return (
      <img
        aria-hidden
        src={images[0]}
        className="w-full max-w-xs rounded-4xl"
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
        className="w-full max-w-xs"
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
            <CarouselPrevious className="static hover:bg-muted/50" />
            <CarouselNext className="static hover:bg-muted/50" />
          </div>

          <div
            className="ml-auto flex items-center gap-2"
            aria-label="Slide progress"
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={selectedIndex === index ? "true" : "false"}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition",
                  selectedIndex === index
                    ? "bg-primary"
                    : "bg-muted/40 hover:bg-muted/80"
                )}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </Carousel>
    )
  }
  return null
}

export function Blog({ sectionId, title, content, images }: BlogProps) {
  const isMobile = useIsMobile()

  return (
    <section className="scroll-mt-24" id={sectionId}>
      <div className={cn("flex gap-2", isMobile ? "flex-col" : "flex-row")}>
        {isMobile && <h2 className="text-3xl font-semibold">{title}</h2>}
        <BlogImages images={images ?? []} />
        <div className="flex flex-col">
          {!isMobile && <h2 className="text-3xl font-semibold">{title}</h2>}
          {content}
        </div>
      </div>
    </section>
  )
}
