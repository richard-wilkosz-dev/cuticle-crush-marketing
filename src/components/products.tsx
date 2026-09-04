import placeholderSquare from '@/assets/placeholder-square.avif';
import placeholderWide from '@/assets/placeholder-wide.avif';
import { Blog } from './blog';

export const Products = () => {
  return (
    <Blog
      images={[
        placeholderSquare.src,
        placeholderSquare.src,
        placeholderSquare.src,
      ]}
      sectionId="products"
      title="Products"
    >
      <p>
        I use high quality, professional gel and lacquer products. No acrylic
        systems are used in my studio so there are no fumes to worry about! Yay!
        Hypo-allergenic products are at the core of Cuticle Crush.
      </p>
      <p>
        Dazzle Dry is a low-maintenance, long lasting regular lacquer that dries
        in 5 minutes (yes, really!!) and lasts 7-14 days typically on hands and
        often 30+ days on toes. It is also 9-free. Light Elegance and Stellar
        Gel (HEMA/TPO/HPMA free) are the main gel systems I use. Both are
        formulated to be as hypoallergenic as possible, and although many with
        gel allergies have used these products without a reaction, it is not a
        guarantee.
      </p>
      <p>
        If you have a known gel allergy, please contact me for nail patch test
        prior to scheduling an appointment. Patch test removal is free. Any
        product recommendation from me is from my expertise as a licensed nail
        tech and is not medical advice.
      </p>
    </Blog>
  );
};
