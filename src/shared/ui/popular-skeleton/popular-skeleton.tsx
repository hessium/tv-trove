import { GenerateSkeleton } from '@/shared/ui/generate-skeleton/generate-skeleton';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';

import './popular-skeleton.scss';
export const PopularSkeleton = () => {
  return (
    <div className='popular-skeleton'>
      <h2 className='popular-skeleton__title'><Skeleton /></h2>
     <div className='popular-skeleton__list'> <GenerateSkeleton>
        <div className="popular-skeleton__item">
          <Skeleton />
        </div>
      </GenerateSkeleton></div>
    </div>
  );
};
