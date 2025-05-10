import type { Metadata } from 'next';
import { MovieCard } from '@/shared/ui/movie-card/movie-card';
import { moviesApi } from '@/shared/api/movies';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const movies = await moviesApi.film(Number(slug));

  return {
    title: movies.nameRu || movies.nameEn,
    description: movies.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const movies = await moviesApi.film(Number(slug));

  return <MovieCard movies={movies} />;
}
