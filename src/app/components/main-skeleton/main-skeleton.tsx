import './main-skeleton.scss';
import { GenerateSkeleton } from '@/app/components/generate-skeleton/generate-skeleton';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';

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
            widthWrapper={'150px'}
            height={'200px'}
            hideTitle={true}
          />
        </GenerateSkeleton>
      </div>
    </div>
  );
};
