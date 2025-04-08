import type { HTMLAttributes } from 'react';
import { cn } from '@/shared/utils/cn';

interface MainSectionProps extends HTMLAttributes<HTMLElement> {
  enabledContainer?: boolean;
}

export const MainSection = ({
  children,
  className,
  enabledContainer,
  ...props
}: MainSectionProps) => (
  <section
    className={cn(
      {
        container: !enabledContainer,
      },
      className,
    )}
    {...props}
  >
    {children}
  </section>
);
