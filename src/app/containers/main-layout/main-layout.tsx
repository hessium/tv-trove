import type { PropsWithChildren } from 'react';
import { AppHeader } from '@/app/containers/app-header/app-header';

export const MainLayout = ({ children }: PropsWithChildren) => (
  <>
    <AppHeader />
    <main>{children}</main>
  </>
);
