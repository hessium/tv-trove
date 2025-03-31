import { Film } from '@/app/shared/types/films';

interface MainSlideProps {
  item: Film;
}
export const HeroSlideThumb = ({ item }: MainSlideProps) => {
  return (
    <div className='hero-slide__thumb'>
      <img
        src={item?.posterUrlPreview}
        alt={item?.nameRu}
        width={100}
        height={150}
        loading='lazy'
        aria-hidden='true'
        role='presentation'
      />
    </div>
  );
};
