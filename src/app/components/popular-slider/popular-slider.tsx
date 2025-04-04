'use client';
import { Film } from '@/app/shared/types/films';
import { PopularSliderDynamic } from '@/app/components/popular-slider/popular-slider.dynamic';

interface PopularSliderProps {
  title: string;
  list?: Film[];
}

export const PopularSlider = ({ title, list }: PopularSliderProps) => {
  return (
    <PopularSliderDynamic
      title={title}
      list={list}
    />
  );
};
