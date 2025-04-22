import dynamic from 'next/dynamic';
import { PopularSkeleton } from '@/app/components/popular-skeleton/popular-skeleton';

export const PopularSliderDynamic = dynamic(
  () =>
    import('./popular-slider').then((mod) => mod.PopularSlider),
  {
    loading: () => <PopularSkeleton />,
    ssr: false,
  },
);
