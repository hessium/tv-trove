import type { Metadata } from 'next';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Hero } from '@/app/components/hero/hero';
import getQueryClient from '@/app/shared/utils/get-query-client';
import { FILMS } from '@/app/shared/constants/top-films';
import { useHeroData } from '@/app/shared/hooks/use-hero-data';

export const metadata: Metadata = {
  title: 'TV Trove',
  description: 'Добро пожаловать на сайт TV Trove!',
  keywords: ['tv', 'movies', 'serial'],
};

export default async function Page() {
  const queryClient = getQueryClient();
  const { films, trailers, isLoading, error } = await useHeroData(FILMS.top);
  
  const dehydratedState = dehydrate(queryClient);

  if (error) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <HydrationBoundary state={dehydratedState}>
      <Hero 
        trailers={trailers} 
        films={films} 
        isLoading={isLoading}
      />
    </HydrationBoundary>
  );
}
