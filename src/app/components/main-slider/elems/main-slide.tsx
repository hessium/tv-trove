import Image from 'next/image';

import { removeAgeString } from '@/shared/utils/remove-age-string';
import { Film } from '@/shared/types/api/films';


interface MainSlideProps {
  item: Film;
}

export const MainSlide = ({ item }: MainSlideProps) => {
  return (
    <div className='main-slide'>
      <div className='main-slide__cover'>
        <Image
          src={item.posterUrl}
          alt={item.nameRu || item.nameOriginal || item.nameEn}
          width={500}
          height={300}
          aria-hidden='true'
          role='presentation'
          className='main-slide__img'
          priority={true}
        />
      </div>

      <div className='main-slide__info'>
        <h2 className='main-slide__title'>{item.nameRu || item.nameOriginal || item.nameEn}</h2>

        <div className='main-slide__meta'>
          <span className='main-slide__rating'>
            {item?.ratingKinopoisk || item?.ratingImdb || '10'}
          </span>

          <p className='main-slide__year'>{item.year}</p>

          <p className='main-slide__genre'>{item.genres?.[0]?.genre || ''}</p>

          {item.ratingAgeLimits && (
            <p className='main-slide__age'>
              {removeAgeString(item.ratingAgeLimits)}+
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
