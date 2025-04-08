'use client';

import { Film } from '@/shared/types/films';
import { MainSliderDynamic } from '@/app/components/main-slider/main-slider.dynamic';


interface MainSliderProps {
  list: Film[] | undefined;
}
export const MainSlider = ({ list }: MainSliderProps) => {
  return <MainSliderDynamic list={list} />;
};
