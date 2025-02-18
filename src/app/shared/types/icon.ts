export interface SpritesMap {
  common: 'close' | 'logout' | 'plus' | 'search' | 'user-circle';
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string;
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string;
      }
    >;
  };
} = {
  common: {
    filePath: 'common.9b0b8ee3.svg',
    items: {
      close: {
        viewBox: '0 0 22 22',
      },
      logout: {
        viewBox: '0 0 24 24',
      },
      plus: {
        viewBox: '0 0 24 24',
      },
      search: {
        viewBox: '0 0 24 24',
      },
      'user-circle': {
        viewBox: '0 0 24 24',
      },
    },
  },
};
