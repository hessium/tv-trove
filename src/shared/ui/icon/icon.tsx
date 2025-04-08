import { forwardRef, SVGProps, useMemo } from 'react';
import { SpritesMap } from '@/shared/types/icon';
import { getIconMeta } from '@/shared/utils/get-icon-meta';
import { cn } from '@/shared/utils/cn';


export type AnyIconName = {
  [Key in keyof SpritesMap]: IconName<Key>;
}[keyof SpritesMap];

export type IconName<Key extends keyof SpritesMap> =
  `${Key}/${SpritesMap[Key]}`;

export interface IconProps
  extends Omit<SVGProps<SVGSVGElement>, 'name' | 'type'> {
  name: AnyIconName;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    const { viewBox, filePath, iconName, defaultSize } = useMemo(
      () => getIconMeta(props),
      [props],
    );

    return (
      <svg
        ref={ref}
        aria-hidden
        fill='currentColor'
        focusable='false'
        height={defaultSize.height}
        viewBox={viewBox}
        width={defaultSize.width}
        className={cn(className)}
        {...props}
      >
        <use xlinkHref={`/images/svg-sprites/${filePath}#${iconName}`} />
      </svg>
    );
  },
);

Icon.displayName = 'Icon';
