// app/page.tsx
import type { Metadata } from 'next';
import { MainLayout } from '@/app/containers/main-layout/main-layout';
import { MainSection } from '@/app/containers/main-section/main-section';

export const metadata: Metadata = {
  title: 'TV Trove',
  description: 'Добро пожаловать на сайт TV Trove!',
  keywords: ['tv', 'movies'],
};

export default function Page() {
  return (
    <MainLayout>
      <MainSection>Home</MainSection>
    </MainLayout>
  );
}
