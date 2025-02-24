'use client';
import { moviesApi } from '@/app/shared/api/movies';
import { useQuery } from '@tanstack/react-query';
import { MainSlider } from '@/app/components/main-slider/main-slider';

export const Hero = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['films'],
    queryFn: moviesApi.films,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  return <MainSlider data={data?.items} />;
};
