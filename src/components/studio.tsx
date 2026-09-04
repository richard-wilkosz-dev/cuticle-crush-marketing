import placeholderSquare from '@/assets/placeholder-square.avif';
import { Blog } from './blog';

export const Studio = () => {
  return (
    <Blog
      sectionId="studio"
      title="Studio"
      images={[
        placeholderSquare.src,
        placeholderSquare.src,
        placeholderSquare.src,
      ]}
      className="bg-secondary"
    >
      <p>
        Cuticle Crush is a licensed, private, home nail salon. A clean space
        with sterilized tools and unused supplies will be ready for every
        client. All services are performed dry, meaning there is no finger or
        foot soaking, eliminating water waste and reducing risk of fungal/
        bacterial spread. Hot towels are included in some pedicures to retain
        the relaxing spa elements that many enjoy.
      </p>
      <p>
        Have the appointment you want when you’re with me! Feel free to watch a
        movie or show (tv provided 😘), listen to music together, chit chat, or
        pop in your earbuds to listen to your audiobook solo.
      </p>
      <p>
        My studio address is automatically sent in a confirmation text 24hrs
        before your appointment.
      </p>
      <p>
        The entrance has 5 steps and is not wheelchair accessible. Accessibility
        is important to me, and making large structural changes to remove this
        barrier is not currently readily achievable. Please contact me if you
        have any other questions regard the accessibility of my space.
      </p>
    </Blog>
  );
};
