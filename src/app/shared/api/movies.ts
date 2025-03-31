import { apiRequest } from '@/app/shared/api/api-request';
import { Film, FilmsResponse, TrailerResponse } from '@/app/shared/types/films';
import {
  FetchResponse,
} from '@/app/shared/types/globals';

export const moviesApi = {
  film: (id: number) =>
    apiRequest({
      url: `/films/${id}`,
    }),
  films: (): FilmsResponse =>
    apiRequest({
      url: '/films',
    }),
  filmsByIds: async (ids: number[]): FetchResponse<Film> => {
    try {
      const responses = await Promise.all(
        ids.map((id) =>
          apiRequest({
            url: `/films/${id}`,
          }),
        ),
      );

      const validFilms: Film[] = responses.filter(
        (response): response is Film => !(response as any).error,
      );

      return {
        data: validFilms,
        error: false,
        status: 200,
      };
    } catch (error) {
      return {
        data: [],
        error: true,
        status: 402,
      };
    }
  },
  videos: async (id: number): Promise<TrailerResponse> =>
    apiRequest({
      url: `/films/${id}/videos`,
    }),
};
