import { apiRequest } from '@/app/shared/api/api-request';
import {
  DetailFilm,
  FilmsResponse,
  TrailerResponse,
} from '@/app/shared/types/films';

export const moviesApi = {
  film: (id: number): Promise<DetailFilm> =>
    apiRequest({
      url: `/films/${id}`,
    }),
  topPopular: async (): Promise<FilmsResponse> =>
    apiRequest({
      url: `/films/collections?type=TOP_POPULAR_ALL&page=1`,
    }),
  topFilms: async (): Promise<FilmsResponse> =>
    apiRequest({
      url: `/films/collections?type=TOP_POPULAR_MOVIES&page=1`,
    }),
  topSeries: async (): Promise<FilmsResponse> =>
    apiRequest({
      url: `/films/collections?type=POPULAR_SERIES&page=1`,
    }),
  topAnimation: async (): Promise<FilmsResponse> =>
    apiRequest({
      url: `/films/collections?type=KIDS_ANIMATION_THEME&page=1`,
    }),
  videos: async (id: number): Promise<TrailerResponse> =>
    apiRequest({
      url: `/films/${id}/videos`,
    }),
  premiers: async (premiersDate: {
    year: number;
    month: string;
  }): Promise<FilmsResponse> =>
    apiRequest({
      url: `/films/premieres?year=${premiersDate.year}&month=${premiersDate.month}`,
    }),
};
