import type { Metadata } from 'next';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import getQueryClient from '@/app/shared/utils/get-query-client';
import { PopularSlider } from '@/app/components/popular-slider/popular-slider';
import { useHomePage } from '@/app/shared/hooks/pages/use-home-page';
import { MainSlider } from '@/app/components/main-slider/main-slider';

export const metadata: Metadata = {
  title: 'TV Trove',
  description: 'Добро пожаловать на сайт TV Trove!',
  keywords: ['tv', 'movies', 'serial'],
};

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['home-page'],
    queryFn: useHomePage,
  });

  const data = await useHomePage();

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <h1 className='visually-hidden'>Добро пожаловать на сайт TV Trove!</h1>

      <MainSlider list={data.topPopular.items} />

      <PopularSlider
        title={'Топ фильмов'}
        list={data.topFilms.items}
      />

      <PopularSlider
        title={'Топ сериалов'}
        list={data.topSeries.items}
      />

      <PopularSlider
        title={'Топ мультиков'}
        list={data.topAnimation.items}
      />
    </HydrationBoundary>
  );
}
