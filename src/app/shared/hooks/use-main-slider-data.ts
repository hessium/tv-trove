import { moviesApi } from '@/app/shared/api/movies';
import { Film, TrailerItem } from '@/app/shared/types/films';

interface MainSliderServerData {
  films: Film[];
  trailers: (TrailerItem | undefined)[];
}

export const useMainSliderData = async (
  filmIds: number[],
): Promise<MainSliderServerData> => {
  const [filmsResponse, trailersResponse] = await Promise.all([
    moviesApi.filmsByIds(filmIds),
    Promise.all(filmIds.map((id) => moviesApi.videos(id))),
  ]);

  const trailers = trailersResponse.map((response) =>
    response.items?.find((item) => item.site === 'YOUTUBE'),
  );

  return {
    films: filmsResponse.data || [],
    trailers,
  };
};
