'use client';

import { useTopSeries } from '@/shared/hooks/pages/use-home-page';

import { PopularSliderDynamic } from '@/shared/ui/popular-slider/popular-slider.dynamic';
import { PopularSkeleton } from '@/shared/ui/popular-skeleton/popular-skeleton';

export const PopularSerials = () => {
  const { data, isLoading } = useTopSeries();
  
  if (isLoading) return  <PopularSkeleton />;

  if (!data?.data?.items?.length) return null;

  return (
      <PopularSliderDynamic title={'Топ сериалов'} list={data?.data?.items}/>
  );
};
