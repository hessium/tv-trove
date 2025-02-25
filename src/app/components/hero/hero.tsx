'use client';

import { moviesApi } from '@/app/shared/api/movies';
import { useQuery } from '@tanstack/react-query';
import { MainSlider } from '@/app/components/main-slider/main-slider';

export const Hero = () => {
  const { data } = useQuery({
    queryKey: ['films'],
    queryFn: () => moviesApi.films().then((res) => res.data),
  });

  console.log(data);
  if (!data) return null;

  return (
    <div>
      {data.items.map((el) => (
        <div key={el.kinopoiskId}>{el.nameRu}</div>
      ))}
      <MainSlider data={data.items} />
    </div>
  );
};
