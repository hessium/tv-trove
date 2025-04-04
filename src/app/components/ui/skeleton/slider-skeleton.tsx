import cl from './slider-skeleton.module.scss';

export const SliderSkeleton = () => {
  return (
    <div className={cl.skeleton}>
      <div className={cl.skeleton__image} />
      <div className={cl.skeleton__content}>
        <div className={cl.skeleton__title} />
        <div className={cl.skeleton__text} />
      </div>
    </div>
  );
}; 