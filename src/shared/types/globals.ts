import { Ref } from 'react';

export interface ApiResponse<T> {
  data: T;
  error: boolean;
  status: number;
}

export type ForwardComponent<Element, Props> = Props & {
  forwardedRef?: Ref<Element>;
};

export type FetchResponse<T> = Promise<ApiResponse<T>>;