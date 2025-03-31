import type { PropsWithChildren } from 'react';

export const Skeleton = ({
  length = 10,
  children,
}: PropsWithChildren<{ length?: number }>) =>
  Array.from({ length }).map(() => children);
