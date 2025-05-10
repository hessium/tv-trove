'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useTopPopular } from '@/shared/hooks/pages/use-home-page';

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
import { Film } from '@/shared/types/api/films';

import './main-slider.scss';
import { MainSkeleton } from '@/shared/ui/main-skeleton/main-skeleton';
import { ErrorMessage } from '@/shared/ui/error/error-message';
import { ApiLimitMessage } from '@/shared/ui/api-limit-message/api-limit-message';

export const MainSlider = () => {
  const { data, isLoading, error } = useTopPopular();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  if (isLoading) return <MainSkeleton />;

  if (error) return <ErrorMessage title={`Ошибка загрузки популярных фильмов: ${error.message}`} /> ;

  if (data?.error && data.status === 402) return <ApiLimitMessage/>;

  if (!data?.data.items?.length) return null;

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
          {data.data.items.map((item: Film) => (
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
          {data.data.items.map((item: Film) => (
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
