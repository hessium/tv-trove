'use client';
import Link from 'next/link';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, FreeMode, Thumbs } from 'swiper/modules';

import { MainSlide } from '@/app/components/main-slider/elems/main-slide';
import { ThumbnailSlide } from '@/app/components/main-slider/elems/thumbnail-slide';
import { Film } from '@/shared/types/films';

import './main-slider.scss';


interface MainSliderProps {
  list: Film[] | undefined;
}

export const MainSliderContent = ({ list }: MainSliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  if (!list?.length) return null;

  return (
    <section className='main-slider'>
      <div className='main-slider__container'>
        <Swiper
          modules={[Thumbs, Autoplay, A11y]}
          spaceBetween={0}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          slidesPerView={1}
          className='main-slider__main'
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {list.map((item: Film) => (
            <SwiperSlide
              className='main-slider__slide'
              key={item.kinopoiskId}
            >
              <Link
                className='main-slider__link'
                href={`/films/${item.kinopoiskId}`}
                aria-label={`Перейти к фильму ${item.nameRu}`}
              >
                <MainSlide item={item} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Thumbs, FreeMode, A11y]}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress
          freeMode={{
            enabled: true,
            sticky: true,
          }}
          spaceBetween={10}
          slidesPerView={'auto'}
          className='main-slider__thumbnails'
        >
          {list.map((item: Film) => (
            <SwiperSlide
              className='main-slider__thumbnail'
              key={`${item.kinopoiskId}-thumb`}
            >
              <ThumbnailSlide item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
