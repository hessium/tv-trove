'use client';
import Image from 'next/image';
import { memo, useState, useEffect } from 'react';

import { DetailFilm } from '@/shared/types/films';


import { removeAgeString } from '@/shared/utils/remove-age-string';
import { cn } from '@/shared/utils/cn';
import { Button } from '@/shared/ui/button/button';
import { YoutubePlayer } from '@/shared/ui/player/youtube-player';
import { moviesApi } from '@/shared/api/movies';

import { getYoutubeVideoId } from '@/shared/utils/get-youtube-video-id';

import './movie-card.scss';
import { Spinner } from '@/shared/ui/spinner/spinner';

interface MovieCardProps {
  movies: DetailFilm;
}

export const MovieCard = memo(({ movies }: MovieCardProps) => {
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);
  const [trailerId, setTrailerId] = useState<string | undefined>(undefined);
  const [isLoadingTrailer, setIsLoadingTrailer] = useState(false);

  useEffect(() => {
    if (!movies) return;
    
    const fetchTrailer = async () => {
      setIsLoadingTrailer(true);
      try {
        const trailer = await moviesApi.videos(movies.kinopoiskId);
        const trailerData = trailer.items.filter((item) => item.site === "YOUTUBE");
        
        if (trailerData.length > 0) {
          const videoId = getYoutubeVideoId(trailerData[0].url);
          if (typeof videoId === 'string') {
            setTrailerId(videoId);
          }
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
      } finally {
        setIsLoadingTrailer(false);
      }
    };

    fetchTrailer();
  }, [movies, movies?.kinopoiskId]);

  if (!movies) return null;

  const title = movies.nameRu || movies.nameEn || movies.nameOriginal || 'Без названия';
  const country = movies.countries?.[0]?.country || 'Не указана';
  const genre = movies.genres?.[0]?.genre || 'Не указан';
  const duration = movies.filmLength ? `${movies.filmLength} мин` : 'Не указана';
  const ratingAge = `${removeAgeString(movies?.ratingAgeLimits)}+` || '';
  const rating = movies.ratingKinopoisk || '';
  const ratingCount = `${movies.ratingKinopoiskVoteCount} оценок` || '';

  return (
    <section
      className="movie-card"
      aria-label={`Информация о фильме ${title}`}
    >
      <div className="container">
        <div className="movie-card__wrapper">
          <div className="movie-card__media">
            <div className="movie-card__poster">
              <Image
                src={movies.posterUrl}
                alt={`Постер фильма ${title}`}
                className="movie-card__image"
                fill={true}
                priority
                sizes="(max-width: 768px) 100vw, 300px"
                quality={90}
              />
            </div>

            <div className="movie-card__trailer">
              {isLoadingTrailer ? (
                <div className="movie-card__trailer-loading">
                  <Spinner />
                </div>
              ) : trailerId ? (
                <YoutubePlayer videoId={trailerId} />
              ) : null}
            </div>
          </div>

          <div className="movie-card__info">
            <h1 className="movie-card__name">
              {title}
            </h1>
            <h2 className="movie-card__info-title">О фильме</h2>

            <ul className="movie-card__info-list">
              <li className="movie-card__info-item">
                <span className="movie-card__info-name">Год производства</span>
                <span className="movie-card__info-value">{movies.year || 'Не указан'}</span>
              </li>

              <li className="movie-card__info-item">
                <span className="movie-card__info-name">Страна</span>
                <span className="movie-card__info-value">{country}</span>
              </li>

              <li className="movie-card__info-item">
                <span className="movie-card__info-name">Жанр</span>
                <span className="movie-card__info-value">{genre}</span>
              </li>

              <li className="movie-card__info-item">
                <span className="movie-card__info-name">Возрастной рейтинг</span>
                <span className="movie-card__info-value">{ratingAge}</span>
              </li>

              <li className="movie-card__info-item">
                <span className="movie-card__info-name">Продолжительность</span>
                <span className="movie-card__info-value">{duration}</span>
              </li>
            </ul>
          </div>

          <div className="movie-card__staff">
            <div className="movie-card__rating">
              <div className="movie-card__rating-title">{rating}</div>

              <span className="movie-card__rating-count">
                  {ratingCount}
                </span>

              <Button disabled>Оценить</Button>
            </div>

            <h3 className="movie-card__staff-title">В главных ролях</h3>
            <ul className="movie-card__staff-list">
              <li className="movie-card__staff-item">
                Элайджа Вуд
              </li>
            </ul>
          </div>

        </div>
        {movies.description && (
          <div className="movie-card__description">
            <div className={cn('movie-card__description-panel', { 'isOpen': showFullDescription })}>
              {movies.description}
            </div>
            <button
              className="movie-card__description-more"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? 'Скрыть описание' : 'Показать описание'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
});

MovieCard.displayName = 'MovieCard';
