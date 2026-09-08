import { Blog } from '../blog';
import { Heading } from '../heading';

export const Accessibility = () => {
  return (
    <Blog
      sectionId="accessibility"
      title="Accessibility"
      className="bg-secondary"
    >
      <Heading level={2}>Physical</Heading>
      <p>
        The entrance has 5 steps and is not wheelchair accessible. Accessibility
        is important to me, and making large structural changes to remove this
        barrier is not currently readily achievable. Please contact me if you
        have any other questions regard the accessibility of my space.
      </p>
      <Heading level={2}>Language</Heading>
      <p>
        I am fluent in English and intermediate in Spanish. I have done a couple
        appointments only in Spanish and I can always block additional time for
        our appointment to make sure we get you the result you want without
        miscommunication.
      </p>
    </Blog>
  );
};
