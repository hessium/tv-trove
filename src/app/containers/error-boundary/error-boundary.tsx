import { Component, type PropsWithChildren } from 'react';

import { ERROR_LIST } from '@/shared/constants/error-meta';

import { LayoutMeta } from '@/containers/main-layout/elems/layout-meta';

type TErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundaryLayout extends Component<
  PropsWithChildren,
  TErrorBoundaryState
> {
  state: TErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <LayoutMeta {...ERROR_LIST.boundary} />

          <section className='container'>
            <h1>Error</h1>
          </section>
        </>
      );
    }

    return this.props.children;
  }
}
