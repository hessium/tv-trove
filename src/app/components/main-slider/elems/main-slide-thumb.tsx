import { Film } from '@/app/shared/types/globals';
interface MainSlideProps {
  item: Film;
}
export const MainSlideThumb = ({ item }: MainSlideProps) => {
  return (
    <img
      className='main-slider__img--thumb'
      src={item?.posterUrl}
      alt={item?.nameRu}
      width={100}
      height={100}
    />
  );
};
