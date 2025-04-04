import './main-skeleton.scss';
import { Skeleton } from '@/app/shared/ui/skeleton/skeleton';
import { GenerateSkeleton } from '@/app/components/generate-skeleton/generate-skeleton';

export const MainSkeleton = () => {
  return (
    <div className='main-skeleton'>
      <div className='main-skeleton__item'>
        <Skeleton
          height={'100%'}
          hideTitle={true}
        />
      </div>
      <div className='main-skeleton__list'>
        <GenerateSkeleton length={20}>
          <Skeleton
            width={'150px'}
            height={'200px'}
            hideTitle={true}
          />
        </GenerateSkeleton>
      </div>
    </div>
  );
};
