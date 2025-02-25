import { Film } from '@/app/shared/types/globals';
import { moviesApi } from '@/app/shared/api/movies';
import { useState } from 'react';
interface MainSlideProps {
  item: Film;
}
export const MainSlide = ({ item }: MainSlideProps) => {
  return (
    <div className='main-slide'>
      <div className='main-slide__img'>
        <img
          src={item?.posterUrl}
          alt={item?.nameRu}
          width={500}
          height={300}
          loading='lazy'
        />
      </div>

      <div className='main-slide__content'>
        <h2 className='main-slide__name'>
          {item.nameRu ? item?.nameRu : item?.nameOriginal}
        </h2>
        <div className='main-slide__bottom'>
          <span className='main-slide__rating'>
            {item?.ratingImdb ? item?.ratingImdb : '0'}
          </span>
          <p className='main-slide__text'>{item?.year}</p>
          <p className='main-slide__text main-slide__text--upper'>
            {item?.genres[0].genre}
          </p>
          {item.ratingAgeLimits && (
            <p className='main-slide__text'>{item.ratingAgeLimits}</p>
          )}
        </div>
      </div>
    </div>
  );
};
