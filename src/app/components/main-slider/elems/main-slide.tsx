import { Film, TrailerItem } from '@/app/shared/types/films';
import { removeAgeString } from '@/app/shared/utils/remove-age-string';
import { DynamicYoutubePlayer } from '@/app/shared/ui/player/youtube-player.dymanic';
import { getYoutubeVideoId } from '@/app/shared/utils/get-youtube-video-id';

interface MainSlideProps {
  item: Film;
  trailer?: TrailerItem;
  isActive?: boolean;
}

export const MainSlide = ({ item, trailer, isActive = false }: MainSlideProps) => {
  const trailerId = trailer?.url
    ? getYoutubeVideoId(trailer?.url)?.toString()
    : null;

  return (
    <div className='hero-slide'>
      <div className='hero-slide__img'>
        <img
          src={item?.coverUrl}
          alt={item?.nameRu}
          width={500}
          height={300}
          loading='lazy'
          aria-hidden='true'
          role='presentation'
        />
      </div>

      {trailerId && item?.coverUrl && (
        <DynamicYoutubePlayer
          videoId={trailerId}
          isActive={isActive}
        />
      )}

      <div className='hero-slide__content'>
        <h2 className='hero-slide__name'>
          {item.nameRu ? item?.nameRu : item?.nameOriginal}
        </h2>

        <div className='hero-slide__bottom'>
          <span className='hero-slide__rating'>
            {item?.ratingImdb ? item?.ratingImdb : '0'}
          </span>

          <p className='hero-slide__text'>{item?.year}</p>

          <p className='hero-slide__text hero-slide__text--upper'>
            {item?.genres[0].genre}
          </p>

          {item.ratingAgeLimits && (
            <p className='hero-slide__text'>
              {removeAgeString(item.ratingAgeLimits)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
