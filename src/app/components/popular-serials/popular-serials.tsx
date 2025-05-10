'use client';

import { useTopSeries } from '@/shared/hooks/pages/use-home-page';

import { PopularSliderDynamic } from '@/shared/ui/popular-slider/popular-slider.dynamic';
import { PopularSkeleton } from '@/shared/ui/popular-skeleton/popular-skeleton';

export const PopularSerials = () => {
  const { data, isLoading , error} = useTopSeries();
  
  if (isLoading) {
    return  <PopularSkeleton />;
  }

  if (error) {
    return <div>Ошибка загрузки сериалов: {error.message}</div>;
  }

  if (data?.error) return <div>Ошибка загрузки популярных сериалов: {data.error} </div>;

  if (!data?.data?.items?.length) return null;

  return (
      <PopularSliderDynamic title={'Топ сериалов'} list={data?.data?.items}/>
  );
};
