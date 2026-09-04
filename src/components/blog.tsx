import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Heading } from './heading';
import { Image } from './image';

type BlogProps = {
  className?: string;
  sectionId: string;
  title: string;
  children: ReactNode;
  images?: string[];
};

export function Blog({
  className,
  sectionId,
  title,
  children,
  images,
}: BlogProps) {
  return (
    <section
      className={cn('scroll-mt-24  flex-col gap-12 ', className)}
      id={sectionId}
    >
      <div className="px-8 py-12 m-auto max-w-3xl">
        <Heading level={1} className="text-3xl font-semibold sm:hidden">
          {title}
        </Heading>
        {images && (
          <Image className="float-right max-w-sm ml-8" images={images ?? []} />
        )}
        <Heading level={1} className="hidden text-3xl font-semibold sm:block">
          {title}
        </Heading>
        <div className="pt-2">{children}</div>
      </div>
    </section>
  );
}
