import React, { ReactNode } from 'react';
import QueryProvider from '@/app/containers/query-client-provideer/query-client-provider';
import '../../public/styles/app.css';
import { BaseMeta } from '@/app/components/base-meta/base-meta';
import { MainLayout } from '@/app/containers/main-layout/main-layout';

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
        </QueryProvider>
      </body>
    </html>
  );
}
