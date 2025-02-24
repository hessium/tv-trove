import type { Metadata } from 'next';
import { MainLayout } from '@/app/containers/main-layout/main-layout';
import { MainSection } from '@/app/containers/main-section/main-section';
import { Hero } from '@/app/components/hero/hero';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { moviesApi } from '@/app/shared/api/movies';

export const metadata: Metadata = {
  title: 'TV Trove',
  description: 'Добро пожаловать на сайт TV Trove!',
  keywords: ['tv', 'movies'],
};

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['films'],
    queryFn: moviesApi.films,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MainLayout>
        <MainSection>
          <Hero />
        </MainSection>
      </MainLayout>
    </HydrationBoundary>
  );
}
