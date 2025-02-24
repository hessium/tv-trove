import { IconProps } from '@/app/shared/ui/icon/icon';
import { SPRITES_META, SpritesMap } from '@/app/shared/types/icon';

export const getIconMeta = <Key extends keyof SpritesMap>({
  name,
  width = 16,
  height = 16,
}: IconProps) => {
  const [spriteName, iconName] = name.split('/') as [Key, SpritesMap[Key]];

  const { filePath, items } = SPRITES_META[spriteName];

  const viewBox = items[iconName]?.viewBox;

  const defaultSize = { height, width };

  return {
    defaultSize,
    filePath,
    iconName,
    viewBox,
  };
};
