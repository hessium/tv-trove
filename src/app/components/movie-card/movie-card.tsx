'use client';
import './movie-card.scss';
import { DetailFilm } from '@/app/shared/types/films';

interface MovieCardProps {
  movies: DetailFilm;
}
export const MovieCard = ({ movies }: MovieCardProps) => {
  if (!movies) return null;

  return (
    <section
      key={movies.kinopoiskId}
      className='movie-card'
    >
      <div className='container'>
        <div className='movie-card__wrapper'>
          <div className='movie-card__media'>
            <div className='movie-card__poster'>
              <img
                src={movies?.posterUrl}
                alt={movies.nameRu ? movies.nameRu : ''}
                className='movie-card__image'
                width={300}
                height={500}
              />
            </div>
          </div>
          <div className='movie-card__info'>
            <h1 className='movie-card__name'>
              {movies.nameRu || movies.nameEn || movies.nameOriginal}
            </h1>
            <h3 className='movie-card__info-title'>О сериале</h3>
            <ul className='movie-card__info-list'>
              <li className='movie-card__info-item'>
                <span className='movie-card__info-name'>Год производства</span>
                <span className='movie-card__info-value'>{movies.year}</span>
              </li>

              <li className='movie-card__info-item'>
                <span className='movie-card__info-name'>Страна</span>
                <span className='movie-card__info-value'>
                  {movies.countries[0].country}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
