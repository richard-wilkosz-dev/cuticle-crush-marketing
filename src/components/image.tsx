import { HeartIcon } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

type ImageProps = {
  images: string[];
  className?: string;
};

export function Image({ images, className }: ImageProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  if (images.length === 1) {
    return (
      <img
        aria-hidden
        src={images[0]}
        className={cn('h-full w-full rounded-4xl', className)}
      />
    );
  }
  return (
    <Carousel
      aria-hidden
      className={cn('h-full w-full', className)}
      setApi={setApi}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={image.toString()}>
            <img src={images[index]} aria-hidden className="rounded-t-4xl" />
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

        <div className="ml-auto flex items-center gap-2">
          {images.map((image, index) => {
            return (
              <button
                key={image.toString()}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={selectedIndex === index ? 'true' : 'false'}
                onClick={() => api?.scrollTo(index)}
              >
                <HeartIcon
                  className="translate-y-0 text-accent transition active:translate-y-px"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  size={24}
                  weight={
                    selectedIndex === index
                      ? 'fill'
                      : hovered
                        ? 'duotone'
                        : 'regular'
                  }
                />
              </button>
            );
          })}
        </div>
      </div>
    </Carousel>
  );
}
