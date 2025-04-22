'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Film } from '@/shared/types/films';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './popular-slider.scss';


interface PopularSliderContentProps {
  title: string;
  list?: Film[];
}

export const PopularSlider = ({ list, title }: PopularSliderContentProps) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  
  if (list === undefined || list.length === 0) return null;

  return (
    <section className='popular-slider__wrap'>
      <h2 className='popular-slider__title'>{title}</h2>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={'auto'}
        className='popular-slider'
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}

        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
      >
        <div className="popular-slider__navigation">
          <button  ref={navigationPrevRef} 
          className='popular-slider__navigation-button popular-slider__navigation-prev' 
          aria-label="Предыдущий слайд">
            <span aria-hidden="true">❮</span>
          </button>
          <button ref={navigationNextRef}
           className='popular-slider__navigation-button popular-slider__navigation-next' 
           aria-label="Следующий слайд">
            <span aria-hidden="true">❯</span>
          </button>
        </div>
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
                <Image
                  src={item.posterUrl}
                  alt={item.nameRu || item.nameOriginal || item.nameEn}
                  width={300}
                  height={500}
                  aria-hidden='true'
                  role='presentation'
                  priority={false}
                />
              </div>
              <h3>{item.nameRu || item.nameOriginal || item.nameEn}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};