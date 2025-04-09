import type { HTMLAttributes } from 'react';

import { cn } from '@/shared/utils/cn';
import { createCssVar } from '@/shared/utils/create-css-var';

import   './spinner.scss';
interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export const Spinner = ({ className, size }: SpinnerProps) => (
  <div
    className={cn('spinner', className)}
    style={{ ...createCssVar('spinner-size', size) }}
  />
);
