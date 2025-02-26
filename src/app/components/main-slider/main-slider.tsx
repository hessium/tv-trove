import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import '@/app/components/main-slider/main-slider.scss';

import { MainSlide } from '@/app/components/main-slider/elems/main-slide';
import { MainSlideThumb } from '@/app/components/main-slider/elems/main-slide-thumb';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Film, FilmsProps } from '@/app/shared/types/films';

interface MainSliderProps {
  data: FilmsProps;
}

export const MainSlider = ({ data }: MainSliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  if (!data) return null;

  return (
    <div className='main-slider__wrap'>
      <Swiper
        modules={[Thumbs, Autoplay]}
        spaceBetween={50}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        slidesPerView={1}
        className='main-slider'
      >
        {data.map((item: Film) => (
          <SwiperSlide
            className='main-slider__item'
            key={item.kinopoiskId}
          >
            <MainSlide item={item} />
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
        className='main-slider-thumbs'
      >
        {data.map((item: Film) => (
          <SwiperSlide
            className='main-slider__item--thumb main-slider__item'
            key={item.kinopoiskId}
          >
            <MainSlideThumb item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
