import type { Metadata } from 'next';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { MainSlider } from './components/main-slider/main-slider';
import getQueryClient from '@/app/shared/utils/get-query-client';
import { FILMS } from '@/app/shared/constants/top-films';
import { moviesApi } from '@/app/shared/api/movies';
import { useMainSliderData } from '@/app/shared/hooks/use-main-slider-data';

export const metadata: Metadata = {
  title: 'TV Trove',
  description: 'Добро пожаловать на сайт TV Trove!',
  keywords: ['tv', 'movies', 'serial'],
};

export default async function Page() {
  const queryClient = getQueryClient();
  const { films, trailers } = await useMainSliderData(FILMS.top);

  await queryClient.prefetchQuery({
    queryKey: ['films', FILMS.top],
    queryFn: () => moviesApi.filmsByIds(FILMS.top),
  });

  await queryClient.prefetchQuery({
    queryKey: ['trailers', FILMS.top],
    queryFn: async () => {
      const trailersResponse = await Promise.all(
        FILMS.top.map((id) => moviesApi.videos(id)),
      );
      return trailersResponse.map((response) =>
        response.items?.find((item) => item.site === 'YOUTUBE'),
      );
    },
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <MainSlider
        trailers={trailers}
        films={films}
      />
    </HydrationBoundary>
  );
}
