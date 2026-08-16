import { HeartIcon } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel"

type ImageProps = {
  images: string[]
}

export function Image({ images }: ImageProps) {
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
              <img src={images[index]} className="rounded-t-4xl" />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center rounded-b-4xl border bg-card p-4 py-3">
          <div className="flex items-center gap-2">
            <CarouselPrevious
              className="static bg-card"
              size="icon-lg"
              variant="outline"
            />
            <CarouselNext
              className="static bg-card"
              size="icon-lg"
              variant="outline"
            />
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
                    className="translate-y-0 text-accent transition active:translate-y-px"
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
