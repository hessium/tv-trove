import './popular-skeleton.scss';
import { GenerateSkeleton } from '@/app/components/generate-skeleton/generate-skeleton';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';

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
