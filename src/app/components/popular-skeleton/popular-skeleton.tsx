import { GenerateSkeleton } from '@/app/components/generate-skeleton/generate-skeleton';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';

import './popular-skeleton.scss';
export const PopularSkeleton = () => {
  return (
    <div className='popular-skeleton'>
      <GenerateSkeleton>
        <Skeleton
          widthWrapper={'200px'}
          height={'250px'}
        />
      </GenerateSkeleton>
    </div>
  );
};
