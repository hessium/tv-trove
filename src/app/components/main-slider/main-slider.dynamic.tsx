import dynamic from 'next/dynamic';
import { MainSkeleton } from '@/app/components/main-skeleton/main-skeleton';

export const MainSliderDynamic = dynamic(
  () => import('./main-slider-content').then((mod) => mod.MainSliderContent),
  {
    loading: () => <MainSkeleton />,
    ssr: false,
  },
);
