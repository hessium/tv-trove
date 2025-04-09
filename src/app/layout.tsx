import React, { ReactNode } from 'react';
import QueryProvider from '@/app/containers/query-client-provideer/query-client-provider';
import { BaseMeta } from '@/app/components/base-meta/base-meta';
import { MainLayout } from '@/app/containers/main-layout/main-layout';

import '../../public/styles/app.css';
import { AppFooter } from '@/app/containers/app-footer/app-footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <BaseMeta />
      </head>
      <body>
        <QueryProvider>
          <MainLayout>{children}</MainLayout>
          <AppFooter/>
        </QueryProvider>
      </body>
    </html>
  );
}
