'use client';

import { moviesApi } from '@/app/shared/api/movies';
import { useQuery } from '@tanstack/react-query';
import { MainSlider } from '@/app/components/main-slider/main-slider';

export const Hero = () => {
  const { data } = useQuery({
    queryKey: ['films'],
    queryFn: moviesApi.films,
  });

  if (!data?.items) return null;

  return (
    <div>
      <MainSlider data={data.items} />
    </div>
  );
};
