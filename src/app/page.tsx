import type { Metadata } from 'next';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import getQueryClient from '@/shared/utils/get-query-client';
import { getHomePageData } from '@/shared/hooks/pages/use-home-page';
import { PopularSerials } from '@/app/components/popular-slider/popular-serials';
import { MainSlider } from './components/main-slider/main-slider';

export const metadata: Metadata = {
  title: 'TV Trove',
  description: 'Добро пожаловать на сайт TV Trove!',
  keywords: ['tv', 'movies', 'serial'],
};

export default async function Page() {
  const queryClient = getQueryClient();
 
  await queryClient.prefetchQuery({
    queryKey: ['home-page'],
    queryFn: getHomePageData,
  });


  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <h1 className='visually-hidden'>Добро пожаловать на сайт TV Trove!</h1>

      <MainSlider />

      <PopularSerials />

    </HydrationBoundary>
  );
}
