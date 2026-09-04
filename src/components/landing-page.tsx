import { HeartIcon } from '@phosphor-icons/react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

import placeholderSquare from '@/assets/placeholder-square.avif';
import placeholderWide from '@/assets/placeholder-wide.avif';
import { SiteHeader } from '@/components/site-header';
import { useActiveSection } from '@/hooks/use-active-section';
import { useIsMobile } from '@/hooks/use-mobile';
import { AboutMe } from './about-me';
import { Blog } from './blog';
import { Contact } from './contact';
import { Heading } from './heading';
import { Products } from './products';
import { Rewards } from './rewards';
import { Services } from './services';
import { Stat } from './stat';
import { Studio } from './studio';
import { AspectRatio } from './ui/aspect-ratio';
import { Card } from './ui/card';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

const sections = [
  { id: 'about-me', title: 'About me' },
  { id: 'studio', title: 'Studio' },
  { id: 'products', title: 'Products' },
  { id: 'rewards', title: 'Rewards' },
  { id: 'contact', title: 'Contact' },
] as const;

const sectionIds = sections.map((section) => section.id);
const placeholderSquareSrc = placeholderSquare.src;
const placeholderWideSrc = placeholderWide.src;
const heroImages = [placeholderWideSrc, placeholderWideSrc];

// const mockCopy = (
//   <>
//     <p>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis
//       nisl vel neque lobortis gravida. Nulla porta finibus elit, at molestie
//       turpis dignissim ac. Nullam vitae orci dui. Cras egestas purus eget nibh
//       rutrum pulvinar.
//     </p>
//     <p>
//       Fusce vehicula sed risus id placerat. Vivamus consequat quam non sem
//       mollis, ut interdum neque posuere. Vivamus erat turpis, convallis vitae
//       tincidunt et, euismod in ante. Pellentesque fermentum dolor at tincidunt
//       feugiat.
//     </p>
//     <p>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis
//       nisl vel neque lobortis gravida. Nulla porta finibus elit, at molestie
//       turpis dignissim ac.
//     </p>
//   </>
// )

export function LandingPage() {
  const isMobile = useIsMobile();
  const activeSection = useActiveSection(sectionIds);
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  const handleTabChange = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) {
      return;
    }

    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SiteHeader activeTab={activeSection} onTabChange={handleTabChange} />
      <div className="flex flex-col">
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
              {heroImages.map((image) => (
                <CarouselItem key={image.toString()} className="h-full">
                  <img
                    aria-hidden
                    src={image}
                    className="h-full w-full rounded-b-4xl object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </AspectRatio>
        <div className="flex-col">
          <AboutMe />
          <Studio />
          <Products />
          <Rewards />
          <Services />
        </div>
        <Contact />
      </div>
    </div>
  );
}
