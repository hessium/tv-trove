export interface ApiResponse<T> {
  data: T | null;
  error: boolean;
  status: number;
  message?: string;
}

export type FetchResponse<T> = Promise<ApiResponse<T>>;

interface Country {
  country: string;
}

interface Genre {
  genre: string;
}

export interface Film {
  kinopoiskId: number;
  kinopoiskHDId: string;
  imdbId?: string;
  nameRu?: string;
  nameEn?: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl?: string;
  logoUrl?: string;
  reviewsCount: number;
  ratingGoodReview?: number;
  ratingGoodReviewVoteCount?: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb?: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics?: number;
  ratingFilmCriticsVoteCount?: number;
  ratingAwait?: number;
  ratingAwaitCount?: number;
  ratingRfCritics?: number;
  ratingRfCriticsVoteCount?: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan?: string;
  description?: string;
  shortDescription?: string;
  editorAnnotation?: string;
  isTicketsAvailable: boolean;
  productionStatus:
    | 'POST_PRODUCTION'
    | 'FILMING'
    | 'PRE_PRODUCTION'
    | 'COMPLETED'
    | 'UNKNOWN';
  type: 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'VIDEO';
  ratingMpaa?: string;
  ratingAgeLimits: string;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  countries: Country[];
  genres: Genre[];
  startYear?: number;
  endYear?: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}

export type FilmsProps = Film[];

export interface PaginatedResponse {
  items: Film[];
  totalPages: number;
  total: number;
}

export type FilmsResponse = FetchResponse<PaginatedResponse>;
