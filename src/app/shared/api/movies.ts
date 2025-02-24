import { apiRequest } from '@/app/shared/api/api-request';
import { ApiResponse } from '@/app/shared/types/globals';

export const moviesApi = {
  films: () =>
    apiRequest({
      method: 'GET',
      url: 'films',
    }),
};
