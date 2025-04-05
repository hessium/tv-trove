import type { Metadata } from 'next';
import { InDevelopment } from '@/app/components/in-development/in-development';

export const metadata: Metadata = {
  title: 'TV Trove - тв шоу!',
  description: 'TV Trove - тв шоу!',
  keywords: ['tv', 'movies', 'serial'],
};
export default function Page() {
  return <InDevelopment />;
}
