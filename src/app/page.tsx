import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import getQueryClient from '@/shared/utils/get-query-client';
import { PopularSerials } from '@/app/components/popular-serials/popular-serials';
import { MainSlider } from './components/main-slider/main-slider';
import { PopularFilms } from '@/app/components/popular-films/popular-serials';
import { PopularAnimations } from '@/app/components/popular-animations/popular-serials';



export default async function Page() {
  const queryClient = getQueryClient();

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <h1 className='visually-hidden'>Добро пожаловать на сайт TV Trove!</h1>

      <MainSlider />

      <PopularSerials />

      <PopularFilms />

      <PopularAnimations />
    </HydrationBoundary>
  );
}
