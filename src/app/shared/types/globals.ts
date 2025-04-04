export type FetchResponse<T> = Promise<ApiResponse<T>>;

export interface ApiResponse<T> {
  data: T[];
  error: boolean;
  status: number;
}

export interface ApiResponseNew<T = unknown> {
  data: T;
  error: boolean;
  status: number;
}
