import React, { ReactNode } from 'react';
import QueryProvider from '@/app/containers/query-client-provideer/query-client-provider';
import '../../public/styles/app.css';
import { BaseMeta } from '@/app/components/base-meta/base-meta';

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
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
