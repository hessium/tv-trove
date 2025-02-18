import type { PropsWithChildren } from 'react';

export const GenerateSkeleton = ({
  length = 10,
  children,
}: PropsWithChildren<{ length?: number }>) =>
  Array.from({ length }).map(() => children);
