import type { Metadata } from 'next';
import { moviesApi } from '@/app/shared/api/movies';
import { MovieCard } from '@/app/components/movie-card/movie-card';

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
