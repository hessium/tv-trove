interface Country {
  country: string;
}

interface Genre {
  genre: string;
}

export interface DetailFilm {
  kinopoiskId: number;
  kinopoiskHDId?: string;
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
  productionStatus?:
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

export interface TrailerItem {
  url: string;
  name: string;
  site: string;
}

export interface TrailerResponse {
  total: number;
  items: TrailerItem[];
}

export interface Film {
  kinopoiskId: number;
  imdbId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  countries: Country[];
  genres: Genre[];
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl?: string;
  logoUrl?: string;
  description: string;
  ratingAgeLimits: string;
}

export interface Films {
  total: number;
  items: Film[];
}
export interface FilmsResponse {
  data : Films,
  error: boolean,
  status: number
}
