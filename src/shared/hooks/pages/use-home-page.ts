import { moviesApi, movieKeys } from '@/shared/api/movies';
import { FilmsResponse } from '@/shared/types/films';
import {  useQuery } from '@tanstack/react-query';

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


export function useTopPopular() {
  return useQuery({
    queryKey: movieKeys.topPopular(),
    queryFn: moviesApi.topPopular,
  });
}

export function useTopFilms() {
  return useQuery({
    queryKey: movieKeys.topFilms(),
    queryFn: moviesApi.topFilms,
  });
}

export function useTopSeries() {
  return useQuery({
    queryKey: movieKeys.topSeries(),
    queryFn: moviesApi.topSeries,
  });
}

export function useTopAnimation() {
  return useQuery({
    queryKey: movieKeys.topAnimation(),
    queryFn: moviesApi.topAnimation,
  });
}
