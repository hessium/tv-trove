import './skeleton.scss';

interface SkeletonProps {
  height?: string;
  widthWrapper?: string;
  heightWrapper?: string;
  hideTitle?: boolean;
}

export const Skeleton = ({
                           heightWrapper = '100%',
                           widthWrapper = '100%',
                           height = '100%',
                           hideTitle = false
                         }: SkeletonProps) => {
  return (
    <div
      className="skeleton"
      style={{ width: widthWrapper, height: heightWrapper }}
    >
      <div
        className="skeleton__image"
        style={{ height: height }}
      />
      <div className="skeleton__content">
        {!hideTitle && <div className="skeleton__title" />}
      </div>
    </div>
  );
};
