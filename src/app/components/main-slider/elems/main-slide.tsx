import { Film } from '@/app/shared/types/globals';
interface MainSlideProps {
  item: Film;
}
export const MainSlide = ({ item }: MainSlideProps) => {
  return (
    <div className='main-slider__content'>
      <div className='main-slider__img'>
        <img
          src={item?.posterUrl}
          alt={item?.nameRu}
          width={500}
          height={300}
        />
      </div>
      <h3>{item?.nameRu}</h3>
    </div>
  );
};
