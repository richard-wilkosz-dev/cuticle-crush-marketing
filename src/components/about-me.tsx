import placeholderSquare from '@/assets/placeholder-square.avif';
import { Blog } from './blog';

export const AboutMe = () => {
  return (
    <Blog
      sectionId="about-me"
      title="About me"
      images={[placeholderSquare.src]}
    >
      <p>
        My name is Siri and I’ve been a licensed nail tech since May of 2025. My
        absolute favorite type of nail art is more layered and abstract, evoking
        a mood or aesthetic. Color, texture and finish are all so fun to play
        with! I appreciate the art of the manicure in general and a solid color
        mani or pedi can be just as satisfying to me :)
      </p>
      <p className="mb-2!">Some fun facts about me:</p>
      <ul className="list-disc">
        <li>
          I love reality tv, horror movies, and analyzing any kind of media
          really!
        </li>
        <li>
          My go-to drink at a coffee shop is an iced matcha with oat milk and
          vanilla.
        </li>
      </ul>
    </Blog>
  );
};
