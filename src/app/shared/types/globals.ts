export type FetchResponse<T> = Promise<ApiResponse<T>>;

export interface ApiResponse<T> {
  data: T;
  error: boolean;
  status: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalPages: number;
  total: number;
}
