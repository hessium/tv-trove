import dynamic from 'next/dynamic';
import { PopularSkeleton } from '@/app/components/popular-skeleton/popular-skeleton';

export const PopularSliderDynamic = dynamic(
  () =>
    import('./popular-slider-content').then((mod) => mod.PopularSliderContent),
  {
    loading: () => <PopularSkeleton />,
    ssr: false,
  },
);
