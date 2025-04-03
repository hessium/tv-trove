import { Film } from '@/app/shared/types/films';

interface ThumbnailSlideProps {
  item: Film;
}

export const ThumbnailSlide = ({ item }: ThumbnailSlideProps) => {
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
