'use client';

import { useTopFilms } from '@/shared/hooks/pages/use-home-page';

import { PopularSliderDynamic } from '@/shared/ui/popular-slider/popular-slider.dynamic';
import { PopularSkeleton } from '@/shared/ui/popular-skeleton/popular-skeleton';
import { ErrorMessage } from '@/shared/ui/error/error-message';

export const PopularFilms = () => {
  const { data, isLoading , error} = useTopFilms();
  
  if (isLoading) return  <PopularSkeleton />;

  if (error) return <ErrorMessage message={error.message} />;

  if (data?.status === 402) return <ErrorMessage message={'Закончилось колич'} />;

  if (data?.error) return <ErrorMessage message={'сериал'} />;

  if (!data?.data?.items?.length) return null;

  return (
      <PopularSliderDynamic title={'Топ фильмов'} list={data?.data?.items}/>
  );
};
