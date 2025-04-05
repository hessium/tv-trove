import type { Metadata } from 'next';
import { InDevelopment } from '@/app/components/in-development/in-development';

export const metadata: Metadata = {
  title: 'TV Trove - сериалы!',
  description: 'TV Trove - сериалы!',
  keywords: ['tv', 'movies', 'serial'],
};
export default function Page() {
  return <InDevelopment />;
}
