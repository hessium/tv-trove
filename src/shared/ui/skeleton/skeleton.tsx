import './skeleton.scss';

interface SkeletonProps {
  width?: string;
  height?: string;
  hideTitle?: boolean;
}
export const Skeleton = ({
  width = '100%',
  height = '100%',
  hideTitle = false,
}: SkeletonProps) => {
  return (
    <div
      className='skeleton'
      style={{ width: width }}
    >
      <div
        className='skeleton__image'
        style={{ height: height }}
      />
      <div className='skeleton__content'>
        {!hideTitle && <div className='skeleton__title' />}
      </div>
    </div>
  );
};
