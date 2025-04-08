import { moviesApi } from '@/shared/api/movies';
import { FilmsResponse } from '@/shared/types/films';

export interface HomePageData {
  topPopular: FilmsResponse;
  topFilms: FilmsResponse;
  topSeries: FilmsResponse;
  topAnimation: FilmsResponse;
}

export async function useHomePage(): Promise<HomePageData> {
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
