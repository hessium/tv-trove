import { Film } from '@/app/shared/types/globals';
interface MainSlideProps {
  item: Film;
}
export const MainSlideThumb = ({ item }: MainSlideProps) => {
  return (
    <div className='main-slide-thumb'>
      <img
        src={item?.posterUrlPreview}
        alt={item?.nameRu}
        width={100}
        height={150}
        loading='lazy'
      />
    </div>
  );
};
