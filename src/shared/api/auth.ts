import { apiRequest } from '@/shared/api/api-request';
import type {
  AuthLoginProps,
  AuthLoginResponse,
} from '@/shared/types/api/auth';
import type { FetchResponse } from '@/shared/types/globals';

export const authApi = {
  login: (data: AuthLoginProps): FetchResponse<AuthLoginResponse> =>
    apiRequest({ data, method: 'POST', url: '/auth/login' }),
};
