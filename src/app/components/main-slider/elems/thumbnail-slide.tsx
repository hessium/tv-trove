import Image from 'next/image';
import { Film } from '@/shared/types/api/films';

interface ThumbnailSlideProps {
  item: Film;
}

export const ThumbnailSlide = ({ item }: ThumbnailSlideProps) => {
  return (
    <div className='thumbnail-slide'>
      <Image
        src={item.posterUrlPreview}
        alt={item.nameRu || item.nameOriginal || item.nameEn}
        width={100}
        height={150}
        aria-hidden='true'
        role='presentation'
        className='thumbnail-slide__img'
        priority={false}
      />
    </div>
  );
};
