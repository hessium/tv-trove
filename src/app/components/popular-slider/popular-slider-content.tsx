import 'swiper/css';
import './popular-slider.scss';
import { Film } from '@/app/shared/types/films';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

interface PopularSliderContentProps {
  title: string;
  list?: Film[];
}

export const PopularSliderContent = ({ list, title }: PopularSliderContentProps) => {
  if (list === undefined || list.length === 0) return null;

  return (
    <section className='popular-slider__wrap'>
      <h2 className='popular-slider__title'>{title}</h2>

      <Swiper
        spaceBetween={32}
        slidesPerView={'auto'}
        className='popular-slider'
      >
        {list.map((item: Film) => (
          <SwiperSlide
            className='popular-slider__item'
            key={item.kinopoiskId}
          >
            <Link
              href={`/films/${item.kinopoiskId}`}
              aria-label={`Перейти к фильму ${item.nameRu}`}
            >
              <div className='popular-slider__img'>
                <img
                  src={item.posterUrl}
                  alt={item.nameRu || item.nameEn}
                  width={300}
                  height={500}
                  loading='lazy'
                  aria-hidden='true'
                  role='presentation'
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}; 