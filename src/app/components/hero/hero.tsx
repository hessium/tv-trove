'use client';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import './hero.scss';

import { Skeleton } from '@/app/components/skeleton/skeleton';
import { Fade } from '@/app/shared/ui/fade/fade';
import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Thumbs } from 'swiper/modules';
import { Film, TrailerItem } from '@/app/shared/types/films';
import Link from 'next/link';
import { HeroSlide } from '@/app/components/hero/elems/hero-slide';
import { HeroSlideThumb } from '@/app/components/hero/elems/hero-slide-thumb';

interface HeroProps {
  trailers: (TrailerItem | undefined)[];
  films: Film[];
  isLoading?: boolean;
}

export const Hero = ({ trailers, films, isLoading = false }: HeroProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (isLoading) {
    return (
      <div className='hero__animate-wrap'>
        <Fade
          hidden={false}
          isPending={isLoading}
          className='hero__animate-item fade hero__animate-item--big'
        >
          <div className='hero__skeleton'></div>
        </Fade>

        <div className='hero__animate-list'>
          <Skeleton length={5}>
            <Fade
              hidden={false}
              isPending={isLoading}
              className='hero__animate-item fade'
            >
              <div className='hero__skeleton'></div>
            </Fade>
          </Skeleton>
        </div>
      </div>
    );
  }

  if (!films?.length) return null;

  return (
    <section className='hero'>
      <div className='hero__slider-wrap'>
        <Swiper
          modules={[Thumbs, Autoplay]}
          spaceBetween={50}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          slidesPerView={1}
          className='hero__slider'
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {films.map((item: Film, index: number) => (
            <SwiperSlide
              className='hero__slider-item'
              key={item.kinopoiskId}
            >
              <Link
                href={`/films/${item.kinopoiskId}`}
                aria-label={`Перейти к фильму ${item.nameRu}`}
              >
                <HeroSlide
                  item={item}
                  trailer={trailers[index]}
                  isActive={index === activeIndex}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Thumbs, FreeMode]}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress
          freeMode={{
            enabled: true,
            sticky: true,
          }}
          spaceBetween={10}
          slidesPerView={'auto'}
          className='hero__slider-thumbs'
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {films.map((item: Film) => (
            <SwiperSlide
              className='hero__slider-item--thumb hero__slider-item'
              key={`${item.kinopoiskId}-thumb`}
            >
              <HeroSlideThumb item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
