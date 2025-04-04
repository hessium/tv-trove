import { moviesApi } from '@/app/shared/api/movies';
import { FilmsResponse } from '@/app/shared/types/films';

export interface HomePageData {
  topPopular: FilmsResponse;
  topFilms: FilmsResponse;
  topSeries: FilmsResponse;
  topAnimation: FilmsResponse;
}

export async function fetchHomePageData(): Promise<HomePageData> {
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