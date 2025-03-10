import type { Metadata } from 'next';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Hero } from '@/app/components/hero/hero';
import getQueryClient from '@/app/shared/utils/get-query-client';
import { moviesApi } from '@/app/shared/api/movies';

export const metadata: Metadata = {
  title: 'TV Trove',
  description: 'Добро пожаловать на сайт TV Trove!',
  keywords: ['tv', 'movies'],
};

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['films'],
    queryFn: moviesApi.films,
  });

  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <Hero />
    </HydrationBoundary>
  );
}
