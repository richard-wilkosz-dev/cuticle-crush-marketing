// import { ArrowRightIcon } from '@phosphor-icons/react';
// import type { ReactNode } from 'react';
// import lv1a from '@/assets/lv1a.webp';
import lv1b from '@/assets/lv1b.webp';
// import lv1c from '@/assets/lv1c.webp';
import lv2a from '@/assets/lv2a.webp';
// import lv2b from '@/assets/lv2b.webp';
// import lv2c from '@/assets/lv2c.webp';
// import lv3a from '@/assets/lv3a.webp';
// import lv3b from '@/assets/lv3b.webp';
import lv3c from '@/assets/lv3c.webp';
// import lv3d from '@/assets/lv3d.webp';
// import lv4a from '@/assets/lv4a.webp';
// import lv4b from '@/assets/lv4b.webp';
import lv4c from '@/assets/lv4c.webp';
import solid from '@/assets/solid.webp';
import { Blog } from '../blog';
// import { Heading } from './heading';
// import { Image } from './image';
// import { Button } from './ui/button';
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from './ui/card';

// type Service = {
//   name: string;
//   price: number | string | null;
//   description: ReactNode | null;
//   images?: string[];
// };

// const manicures: Service[] = [
//   {
//     name: 'Dry manicure',
//     price: 55,
//     description: (
//       <ul className="mt-2 list-disc pl-5">
//         <li>
//           Includes detailed cuticle care, trimming and shaping of the natural
//           nail, and solid color application of dazzle dry polish or gel polish.
//         </li>
//         <li>Hydrating hand mousse and cuticle oil finish</li>
//         <li>Natural nail service- no length is added.</li>
//       </ul>
//     ),
//   },
//   {
//     name: 'Structured gel dry manicure',
//     price: 65,
//     description: (
//       <ul className="mt-2 list-disc pl-5">
//         <li>
//           Includes trimming and shaping of the natural nail, detailed cuticle
//           work, soft structure gel application and solid color gel application.
//         </li>
//         <li>Hydrating hand mousse and cuticle oil finish</li>
//         <li>
//           Natural nail service- no length is added (except with nail repair
//           add-on, limited to 3 nails)
//         </li>
//       </ul>
//     ),
//   },
// ];

// const pedicures: Service[] = [
//   {
//     name: '“Polish change” dry pedicure',
//     price: 50,
//     description: (
//       <ul className="mt-2 list-disc pl-5">
//         <li>
//           The “toes only” pedicure. Includes trimming and shaping of toe nails,
//           detailed cuticle work, application of solid color dazzle dry or gel
//           polish.
//         </li>
//         <li>No callus care or lotion/ massage.</li>
//       </ul>
//     ),
//   },
//   {
//     name: 'Standard dry pedicure',
//     price: 65,
//     description: (
//       <ul className="mt-2 list-disc pl-5">
//         <li>
//           Includes trimming and shaping of nails, detailed cuticle work, callus
//           softening and reduction, 5 total minutes of leg/foot massage with
//           lotion, and application of solid color Dazzle Dry or gel polish.
//         </li>
//         <li>10min extra massage add-on available - $10</li>
//       </ul>
//     ),
//   },
//   {
//     name: 'Spa dry pedicure',
//     price: 75,
//     description: (
//       <ul className="mt-2 list-disc pl-5">
//         <li>
//           Includes trimming and shaping, detailed cuticle work, callus softening
//           and reduction, exfoliating foot scrub, hot towels, 8 total minutes of
//           leg/foot massage with lotion, and application of solid color Dazzle
//           Dry or gel polish.
//         </li>
//         <li>10min extra massage add-on available - $10</li>
//       </ul>
//     ),
//   },
// ];

// const removalAddOns = [
//   {
//     name: 'No removal / removal of any regular polish',
//     price: 0,
//     description: null,
//   },
//   {
//     name: 'Cuticle Crush standard gel removal',
//     price: 10,
//     description: (
//       <ul className="mt-2 list-disc pl-5">
//         <li>Only applies to my own work</li>
//         <li>Only booked in conjunction with a corresponding mani/pedi</li>
//       </ul>
//     ),
//   },
//   {
//     name: 'Cuticle Crush structured gel fill',
//     price: '10-15',
//     description: (
//       <ul className="mt-2 list-disc pl-5">
//         <li>Only applies to my own work</li>
//         <li>0-21 days since last appt - $10</li>
//         <li>22+ days since last appt - $15</li>
//       </ul>
//     ),
//   },
//   {
//     name: 'Foreign removal',
//     price: 25,
//     description: (
//       <ul className="mt-2 list-disc pl-5">
//         <li>
//           Any gel, structured gel, polygel, acrylic from any nail tech other
//           than myself
//         </li>
//         <li>
//           +$15 for any MMA acrylic. This is an illegal ingredient that takes
//           significantly longer to remove.
//         </li>
//       </ul>
//     ),
//   },
//   {
//     name: 'Cuticle Crush removal only',
//     price: 20,
//     description: (
//       <ul className="mt-2  list-disc pl-5">
//         <li>
//           Removal of any of my work without a corresponding mani/pedi in the
//           same appt
//         </li>
//         <li>
//           Booking just this service does not count toward Cuticle Crush loyalty
//           card rewards
//         </li>
//       </ul>
//     ),
//   },
// ];

// const artAddOns = [
//   {
//     name: 'Level 0.5',
//     price: 5,
//     description: (
//       <ul className="mt-2 list-disc pl-5">
//         <li>Basic magnetic polish included at this level</li>
//         <li>6+ solid color nails</li>
//       </ul>
//     ),
//   },
//   {
//     name: 'Level one',
//     price: '10+',
//     images: [lv1a.src, lv1b.src, lv1c.src],
//     description: (
//       <ul className="mt-2  list-disc pl-5">
//         <li>Single color aura or ombré of all 10 nails</li>
//         <li>All over chrome</li>
//         <li>Simple polka dots on all 10 nails</li>
//         <li>Detailed nail art on 1-3 nails</li>
//         <li>Simple French (any color, does not include double French)</li>
//         <li>
//           Dazzle Dry nail art available at this level but has limitations due to
//           fast drying nature
//         </li>
//       </ul>
//     ),
//   },
//   {
//     name: 'Level two',
//     price: '20+',
//     images: [lv2a.src, lv2b.src, lv2c.src],
//     description: (
//       <ul className="mt-2  list-disc pl-5">
//         <li>Multicolor aura or ombré on all 10 nails</li>
//         <li>Simple designs on all 10 nails</li>
//         <li>Detailed nail art on 4-6 nails</li>
//         <li>Double French</li>
//         <li>Not available with Dazzle Dry. Not available for pedicures.</li>
//       </ul>
//     ),
//   },
//   {
//     name: 'Level three',
//     price: '30+',
//     images: [lv3a.src, lv3b.src, lv3c.src, lv3d.src],
//     description: (
//       <ul className="mt-2  list-disc pl-5">
//         <li>
//           Detailed art on 7-10 nails, including florals, isolated chrome, 3D
//           details, stars, plaid, etc.
//         </li>
//         <li>Not available with Dazzle Dry. Not available for pedicures.</li>
//       </ul>
//     ),
//   },
//   {
//     name: 'Level four',
//     price: '40+',
//     images: [lv4a.src, lv4b.src, lv4c.src],
//     description: (
//       <ul className="mt-2 list-disc pl-5">
//         <li>
//           Level 3 art that requires a significant amount of consultation due to
//           lack of reference images may be increased to this cost level.
//         </li>
//         <li>
//           Layered, detailed specialty elements. Example: pink base with purple
//           and orange aura, hand painted flowers, and isolated chrome accents
//           (each hand goes in the lamp 6+ times extra for all those layered
//           details)
//         </li>
//         <li>
//           Please reach out with questions on what is possible if you have a
//           particularly complex idea
//         </li>
//         <li>Not available with Dazzle Dry. Not available for pedicures.</li>
//       </ul>
//     ),
//   },
// ];

// const ServiceCard = ({ service }: { service: Service }) => {
//   return (
//     <Card className="mx-auto sm:mx-0 w-xs border-0 gap-0 text-foreground shadow-sm">
//       <CardHeader>
//         <CardTitle className="text-base font-semibold text-foreground">
//           {service.name}
//         </CardTitle>
//       </CardHeader>
//       {service.images && (
//         <Image className="mt-4" inline images={service.images ?? []} />
//       )}
//       {service.description && (
//         <CardContent className="h-full flex flex-col mb-3 text-sm gap-1 text-muted-foreground">
//           <div>{service.description}</div>
//         </CardContent>
//       )}
//       <CardFooter className="flex justify-between">
//         <span className="text-base font-semibold text-foreground">
//           ${service.price}
//         </span>
//         <Button variant="secondary">
//           Book
//           <ArrowRightIcon className=" h-4 w-4" />
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };

export const Services = () => {
  return (
    <Blog
      sectionId="services"
      images={[lv1b.src, lv2a.src, lv3c.src, lv4c.src, solid.src]}
      title="Services"
      imageCaptions={[
        'Level 1 example',
        'Level 2 example',
        'Level 3 example',
        'Level 4 example',
        'Solid color example',
      ]}
    >
      <p>
        <strong>Manicures:</strong> detailed cuticle care performed dry using
        Dazzle Dry, gel or structured gel. Ranges from $55-65 for a solid color
      </p>
      <p>
        <strong>Pedicures:</strong> Performed dry, providing detailed cuticle
        care and more depending on level. A solid color of Dazzle Dry or gel
        ranging from $50-$75.
      </p>
      <p>
        <strong>Nail art:</strong> Nail art- $5-$40 depending on complexity.
      </p>
      <p>
        <strong>Removals:</strong> $10-$25 depending on if it is my own work or
        from another tech.
      </p>
      <p>
        Full service descriptions and additional add-ons{' '}
        <a
          className="text-rose-900 underline"
          href="https://www.nailzy.com/book/cuticle-crush?book=1"
          rel="noopener noreferrer"
        >
          detailed here.
        </a>
      </p>
    </Blog>
  );
  // return (
  //   <Blog sectionId="services" title="Services">
  //     <div className="space-y-6 text-muted-foreground">
  //       <div>
  //         <Heading
  //           level={2}
  //           className="mb-2 text-2xl font-semibold text-foreground"
  //         >
  //           Manicures
  //         </Heading>

  //         <div className="flex flex-wrap gap-3">
  //           {manicures.map((service) => (
  //             <ServiceCard key={service.name} service={service} />
  //           ))}
  //         </div>
  //       </div>

  //       <div>
  //         <Heading
  //           level={2}
  //           className="mb-2 text-2xl font-semibold text-foreground"
  //         >
  //           Pedicures
  //         </Heading>

  //         <div className="flex flex-wrap gap-3">
  //           {pedicures.map((service) => (
  //             <ServiceCard key={service.name} service={service} />
  //           ))}
  //         </div>
  //       </div>

  //       <div>
  //         <Heading
  //           level={2}
  //           className="mb-2 text-2xl font-semibold text-foreground"
  //         >
  //           Removals/fills
  //         </Heading>

  //         <div className="flex flex-wrap gap-3">
  //           {removalAddOns.map((service) => (
  //             <ServiceCard key={service.name} service={service} />
  //           ))}
  //         </div>
  //       </div>

  //       <div>
  //         <Heading
  //           level={2}
  //           className="mb-2 text-2xl font-semibold text-foreground"
  //         >
  //           Nail Art add-on
  //         </Heading>
  //         <p>All services include solid color nail polish, up to 5 colors.</p>
  //         <div className="flex flex-wrap gap-3">
  //           {artAddOns.map((service) => (
  //             <ServiceCard key={service.name} service={service} />
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </Blog>
  // );
};
