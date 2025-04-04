import type { Metadata } from 'next';
import { Suspense } from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import getQueryClient from '@/app/shared/utils/get-query-client';
import { MainSlider } from '@/app/components/main-slider/main-slider';
import { PopularSlider } from '@/app/components/popular-slider/popular-slider';
import { SliderSkeleton } from '@/app/components/ui/skeleton/slider-skeleton';
import { fetchHomePageData } from '@/app/shared/hooks/pages/use-home-page';

export const metadata: Metadata = {
  title: 'TV Trove',
  description: 'Добро пожаловать на сайт TV Trove!',
  keywords: ['tv', 'movies', 'serial'],
};

export default async function Page() {
  const queryClient = getQueryClient();

  // Предварительно загружаем данные для кэширования
  await queryClient.prefetchQuery({
    queryKey: ['home-page'],
    queryFn: fetchHomePageData,
  });

  // Получаем данные для начального рендеринга
  const data = await fetchHomePageData();

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <h1 className='visually-hidden'>Добро пожаловать на сайт TV Trove!</h1>
      <Suspense fallback={<SliderSkeleton />}>
        <MainSlider list={data.topPopular.items} />
      </Suspense>
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
