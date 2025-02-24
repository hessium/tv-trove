import { cookier } from '@/app/shared/utils/cookier';
import { COOKIES } from '@/app/shared/constants/cookies';
import { parseApiUrl } from '@/app/shared/utils/parse-api-url';

interface ApiRequestProps extends RequestInit {
  url: string;
  data?: unknown;
  params?: unknown;
  shouldToken?: boolean;
  slug?: string;
}

export enum HttpStatus {
  NotAuthorized = 401,
}

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export const apiRequest = async ({
  url,
  params,
  headers,
  shouldToken = true,
  data,
  slug,
  ...options
}: ApiRequestProps) => {
  try {
    const isServer = typeof document === 'undefined';
    let authToken = null;

    if (shouldToken && !isServer) {
      authToken = cookier.parse(document.cookie, COOKIES.authToken);
    }

    if (isServer) {
      authToken = null;
    }

    const fullUrl = parseApiUrl(url, params, slug);

    const isFormData = data instanceof FormData;

    const body = data && (isFormData ? data : JSON.stringify(data));

    const response = await fetch(fullUrl, {
      headers: {
        ...(authToken && { Authorization: `Bearer ${authToken}` }),
        ...(!isFormData && { 'Content-Type': 'application/json' }),
        ...(API_TOKEN && { 'X-API-KEY': API_TOKEN }),
        ...headers,
      },
      ...((data && { body }) as Record<string, unknown>),
      ...options,
    });

    return await response.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
