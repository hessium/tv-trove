import { apiRequest } from '@/app/shared/api/api-request';
import { FilmsResponse } from '@/app/shared/types/films';

export const moviesApi = {
  film: () =>
    apiRequest({
      url: '/films/301',
    }),
  films: (): FilmsResponse =>
    apiRequest({
      url: '/films',
    }),
  videos: (id: number) =>
    apiRequest({
      url: `/films/${id}/videos`,
    }),
};
