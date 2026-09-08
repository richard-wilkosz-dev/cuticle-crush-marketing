import aboutMe from '@/assets/about-me.webp';
import { Blog } from '../blog';

export const AboutMe = () => {
  return (
    <Blog
      images={[aboutMe.src]}
      sectionId="about-me"
      title="About me"
      className="bg-secondary"
    >
      <p>
        My name is Siri and I’m the licensed nail tech behind Cuticle Crush. My
        absolute favorite type of nail art is more layered and abstract. Playing
        with color and texture will always have my heart.
      </p>
      <p className="mb-2!">Some fun facts about me:</p>
      <ul className="list-disc">
        <li>
          I love reality tv, horror movies, and board games (especially when I
          win)
        </li>
        <li>
          My go-to drink at a coffee shop is an iced matcha with oat milk and
          vanilla
        </li>
      </ul>
    </Blog>
  );
};
