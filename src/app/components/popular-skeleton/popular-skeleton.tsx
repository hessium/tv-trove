import './popular-skeleton.scss';
import { Skeleton } from '@/app/shared/ui/skeleton/skeleton';
import { GenerateSkeleton } from '@/app/components/generate-skeleton/generate-skeleton';

export const PopularSkeleton = () => {
  return (
    <div className='popular-skeleton'>
      <GenerateSkeleton>
        <Skeleton
          width={'200px'}
          height={'250px'}
        />
      </GenerateSkeleton>
    </div>
  );
};
