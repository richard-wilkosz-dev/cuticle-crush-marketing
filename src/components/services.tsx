import lv1a from '@/assets/lv1a.webp';
import lv1b from '@/assets/lv1b.webp';
import lv1c from '@/assets/lv1c.webp';
import { Blog } from './blog';

export const Services = () => {
  return (
    <Blog
      sectionId="services"
      title="Services"
      images={[lv1a.src, lv1b.src, lv1c.src]}
    >
      <p>Placeholder</p>
    </Blog>
  );
};
