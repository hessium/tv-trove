import type { Metadata } from 'next';
import type { Ref } from 'react';

export type NonNullableKeys<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

export type AppMeta<T = NonNullableKeys<Metadata>> = T & {
  canonical?: string;
  image?: string;
  keywords?: string;
};

export type FetchResponse<T> = Promise<ApiResponse<T>>;
export interface ApiResponse<T> {
  data: T;
  error: boolean;
  status: number;
}

export type ForwardComponent<Element, Props> = Props & {
  forwardedRef?: Ref<Element>;
};

export type Slot<U extends string> = Partial<
  Record<U, HTMLElement['className']>
>;

export type PaginationRequestProps<T> = T & {
  limit?: number;
  page?: number;
  sort?: string;
};

export type FetchPaginationResponse<T> = FetchResponse<{
  lastPage: number;
  models: T[];
  rowsCount: number;
}>;

export type MetaType = {
  description: string;
  keywords: string;
  slug: string;
};
