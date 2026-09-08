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
  imageCaptions?: string[];
};

export function Blog({
  className,
  sectionId,
  title,
  children,
  images,
  imageCaptions,
}: BlogProps) {
  return (
    <section
      className={cn('scroll-mt-24 flex-col gap-12', className)}
      id={sectionId}
    >
      <div className={cn('px-8 py-12 m-auto max-w-3xl')}>
        <Heading level={1} className="text-3xl font-semibold mb-2 sm:hidden">
          {title}
        </Heading>
        {images && (
          <Image
            captions={imageCaptions}
            className="sm:float-right max-w-sm mb-4 sm:mb-0 sm:ml-8 mx-auto sm:mr-0"
            images={images ?? []}
          />
        )}
        <Heading level={1} className="hidden text-3xl font-semibold sm:block">
          {title}
        </Heading>
        <div
          className={cn('pt-3', images?.length && 'sm:min-h-150', className)}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
