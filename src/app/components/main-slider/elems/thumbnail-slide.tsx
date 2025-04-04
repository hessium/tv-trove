import { Film } from '@/app/shared/types/films';

interface ThumbnailSlideProps {
  item: Film;
}

export const ThumbnailSlide = ({ item }: ThumbnailSlideProps) => {
  return (
    <div className='thumbnail-slide'>
      <img
        src={item.posterUrlPreview}
        alt={item.nameRu || item.nameOriginal}
        width={100}
        height={150}
        loading='lazy'
        aria-hidden='true'
        role='presentation'
        className='thumbnail-slide__img'
      />
    </div>
  );
};
