import { moviesApi } from '@/app/shared/api/movies';
import { Film, TrailerItem } from '@/app/shared/types/films';

interface HeroData {
  films: Film[];
  trailers: (TrailerItem | undefined)[];
  isLoading: boolean;
  error: Error | null;
}

export const useHeroData = async (filmIds: number[]): Promise<HeroData> => {
  try {
    const [filmsResponse, trailersResponse] = await Promise.all([
      moviesApi.filmsByIds(filmIds),
      Promise.all(filmIds.map((id) => moviesApi.videos(id)))
    ]);

    
    const trailers = trailersResponse.length === 0 
      ? []
      : trailersResponse.map(response => 
          response.items?.find(item => item.site === 'YOUTUBE')
        );

    return {
      films: filmsResponse.data || [],
      trailers,
      isLoading: false,
      error: null,
    };
  } catch (error) {
    return {
      films: [],
      trailers: [],
      isLoading: false,
      error: error as Error,
    };
  }
}; 