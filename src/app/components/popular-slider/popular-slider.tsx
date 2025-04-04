'use client';
import 'swiper/css';
import './popular-slider.scss';
import { Suspense } from 'react';

import { Film } from '@/app/shared/types/films';
import { SliderSkeleton } from '@/app/components/ui/skeleton/slider-skeleton';
import { PopularSliderContent } from './popular-slider-content';

interface PopularSliderProps {
  title: string;
  list?: Film[];
}

export const PopularSlider = ({ title, list }: PopularSliderProps) => {
  return (
    <Suspense fallback={<SliderSkeleton />}>
      <PopularSliderContent
        title={title}
        list={list}
      />
    </Suspense>
  );
};
