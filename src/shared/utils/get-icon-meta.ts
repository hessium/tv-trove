import { SPRITES_META, SpritesMap } from '@/shared/types/icon';
import { IconProps } from '@/shared/ui/icon/icon';


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
