import { moviesApi } from '@/app/shared/api/movies';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = await moviesApi.film(Number(slug));
  console.log(data);
  return <div> {slug}</div>;
}
