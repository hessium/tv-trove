import './main-skeleton.scss';
import { GenerateSkeleton } from '@/shared/ui/generate-skeleton/generate-skeleton';
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
          <div className="main-skeleton__list-item">
            <Skeleton
              hideTitle={true}
            />
          </div>
        </GenerateSkeleton>
      </div>
    </div>
  );
};
