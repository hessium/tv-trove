import { moviesApi, movieKeys } from '@/shared/api/movies';
import { FilmsResponse } from '@/shared/types/films';
import { useQueries, useQuery } from '@tanstack/react-query';

export interface HomePageData {
  topPopular: FilmsResponse;
  topFilms: FilmsResponse;
  topSeries: FilmsResponse;
  topAnimation: FilmsResponse;
}

export async function getHomePageData(): Promise<HomePageData> {
  const [topPopular, topFilms, topSeries, topAnimation] = await Promise.all([
    moviesApi.topPopular(),
    moviesApi.topFilms(),
    moviesApi.topSeries(),
    moviesApi.topAnimation(),
  ]);

  return {
    topPopular,
    topFilms,
    topSeries,
    topAnimation,
  };
}


export function useHomePage() {
  return useQuery({
    queryKey: ['home-page'],
    queryFn: getHomePageData,
  });
}

export function useHomePageQueries() {
  return useQueries({
    queries: [
      {
        queryKey: movieKeys.topPopular(),
        queryFn: moviesApi.topPopular,
      },
      {
        queryKey: movieKeys.topFilms(),
        queryFn: moviesApi.topFilms,
      },
      {
        queryKey: movieKeys.topSeries(),
        queryFn: moviesApi.topSeries,
      },
      {
        queryKey: movieKeys.topAnimation(),
        queryFn: moviesApi.topAnimation,
      },
    ],
  });
}
