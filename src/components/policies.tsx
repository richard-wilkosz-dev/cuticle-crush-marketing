import { Blog } from './blog';

export const Policies = () => {
  return (
    <Blog className="bg-secondary" sectionId="policies" title="Policies">
      <p>
        Review{' '}
        <a
          className="text-rose-900 underline"
          href="https://www.nailzy.com/book/cuticle-crush/policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          policies here
        </a>{' '}
        before booking.
      </p>
    </Blog>
  );
};
