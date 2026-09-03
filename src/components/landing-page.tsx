import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import placeholderSquare from '@/assets/placeholder-square.avif';
import placeholderWide from '@/assets/placeholder-wide.avif';
import { SiteHeader } from '@/components/site-header';
import { useActiveSection } from '@/hooks/use-active-section';
import { useIsMobile } from '@/hooks/use-mobile';
import { Blog } from './blog';
import { Contact } from './contact';
import { Heading } from './heading';
import { Stat } from './stat';
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
        <div className="m-auto flex w-full max-w-3xl flex-col gap-12 px-8 pb-12">
          <Blog
            sectionId="about-me"
            title="About me"
            images={[placeholderSquareSrc]}
          >
            <p>
              My name is Siri and I’ve been a licensed nail tech since May of
              2025. My love for art has taken different forms over the years but
              most prominently music, makeup, and of course nails and nail art!
            </p>
            <p>
              After working in dental technology and public health for 5 years,
              I realized that tiny canvases were calling me and I went back to
              school to become a nail tech.
            </p>
            <p>
              My absolute favorite type of nail art is more layered and
              abstract, evoking a mood or aesthetic. Color, texture and finish
              are all so fun to play with! I appreciate the art of the manicure
              in general and a solid color mani or pedi can be just as
              satisfying to me:)
            </p>
            <p className="mb-2!">Some fun facts about me:</p>
            <ul className="list-disc">
              <li>
                I love reality tv, horror movies, and analyzing any kind of
                media really!
              </li>
              <li>
                My go-to drink at a coffee shop is an iced matcha with oat milk
                and vanilla.
              </li>
              <li>I have ADHD and appreciate tangential conversation!</li>
            </ul>
          </Blog>
          <Blog
            sectionId="studio"
            title="Studio"
            images={[
              placeholderSquareSrc,
              placeholderSquareSrc,
              placeholderSquareSrc,
            ]}
            reversed
          >
            <p>
              Cuticle Crush is a licensed, private, home nail salon. A clean
              space with sterilized tools and unused supplies will be ready for
              every client. All services are performed dry, meaning there is no
              finger or foot soaking, eliminating water waste and reducing risk
              of fungal/ bacterial spread. Hot towels are included in some
              pedicures to retain the relaxing spa elements that many enjoy.
              Have the appointment you want when you’re with me! Feel free to
              watch a movie or show (tv provided 😘), listen to music together,
              chit chat, or pop in your earbuds to listen to your audiobook
              solo.
            </p>
            <p>
              My studio address is automatically sent in a confirmation text
              24hrs before your appointment.
            </p>
            <p>
              The entrance has 5 steps and is not wheelchair accessible.
              Accessibility is important to me, and making large structural
              changes to remove this barrier is not currently readily
              achievable. Please contact me if you have any other questions
              regard the accessibility of my space.
            </p>
          </Blog>
          <Blog
            images={[
              placeholderSquareSrc,
              placeholderSquareSrc,
              placeholderSquareSrc,
            ]}
            sectionId="products"
            title="Products"
          >
            <p>
              I use high quality, professional gel and lacquer products. No
              acrylic systems are used in my studio so there are no fumes to
              worry about! Yay! Hypo-allergenic products are at the core of
              Cuticle Crush.
            </p>
            <p>
              Dazzle Dry is a low-maintenance, long lasting regular lacquer that
              dries in 5 minutes (yes, really!!) and lasts 7-14 days typically
              on hands and often 30+ days on toes. It is also 9-free. Light
              Elegance and Stellar Gel (HEMA/TPO/HPMA free) are the main gel
              systems I use. Both are formulated to be as hypoallergenic as
              possible, and although many with gel allergies have used these
              products without a reaction, it is not a guarantee.
            </p>
            <p>
              If you have a known gel allergy, please contact me for nail patch
              test prior to scheduling an appointment. Patch test removal is
              free. Any product recommendation from me is from my expertise as a
              licensed nail tech and is not medical advice.
            </p>
          </Blog>
          <Blog sectionId="rewards" title="Rewards">
            <Heading level={2}>Crush Club</Heading>
            <p>
              Cuticle Crush values returning clients and wants to show that!!! I
              will manage your CC punchcard each service to track your progress
              toward rewards 🤑
            </p>
            <div className="flex flex-row gap-4">
              <Card className="flex-1 gap-2 p-4 text-center">
                <div className="text-xl">❤️</div>
                <Heading level={3}>Crush tier</Heading>
                <div className="flex-1" />
                <Stat label="appts 2, 4, 6, 8, and 10" value="5% off" />
                <Stat label="12th appt" value="10% off" />
                <div className="flex-1" />
              </Card>
              <Card className="flex-1 gap-2 p-4 text-center">
                <div className="text-xl">❤️❤️</div>
                <Heading level={3}>Beloved tier</Heading>
                <div className="flex-1" />
                <Stat label="appts 2, 4, 6, 8, and 10" value="5% off" />
                <Stat label="12th appt" value="20% off" />
                <div className="flex-1" />
              </Card>
              <Card className="flex-1 gap-2 p-4 text-center">
                <div className="text-xl">❤️❤️❤️</div>
                <Heading level={3}>Devoted tier</Heading>
                <div className="text-muted-foreground">
                  Repeats after filling
                </div>
                <Stat label="appts 2, 4, 6, 8, and 10" value="5% off" />
                <Stat label="12th appt" value="30% off" />
                <Stat label="🎂🎁🎉" value="Birthday gift" />
              </Card>
            </div>
            <Heading className="pt-8" level={2}>
              Feedback please!
            </Heading>
            <p>
              Leave a Google Review, and get $5 off your next appointment! (Once
              per client.)
            </p>
          </Blog>
        </div>
        <Contact />
      </div>
    </div>
  );
}
