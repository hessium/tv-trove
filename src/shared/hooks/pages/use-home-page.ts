import { moviesApi, movieKeys } from '@/shared/api/movies';
import {  useQuery } from '@tanstack/react-query';

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
