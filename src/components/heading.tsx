import { cn } from '@/lib/utils';

export const Heading = ({
  children,
  level,
  className,
}: {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4;
  className?: string;
}) => {
  return (
    <>
      {level === 1 && (
        <h1 className={cn('text-3xl font-semibold', className)}>{children}</h1>
      )}
      {level === 2 && (
        <h2
          className={cn(
            'text-2xl font-semibold text-muted-foreground',
            className,
          )}
        >
          {children}
        </h2>
      )}
      {level === 3 && (
        <h3 className={cn('text-xl font-semibold', className)}>{children}</h3>
      )}
      {level === 4 && (
        <h4
          className={cn(
            'text-lg font-semibold text-muted-foreground',
            className,
          )}
        >
          {children}
        </h4>
      )}
    </>
  );
};
