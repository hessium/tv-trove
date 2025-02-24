export interface SpritesMap {
  common:
    | 'close'
    | 'home'
    | 'logout'
    | 'movie'
    | 'plus'
    | 'search'
    | 'serial'
    | 'tv'
    | 'user-circle';
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
    filePath: 'common.f97f5ab8.svg',
    items: {
      close: {
        viewBox: '0 0 22 22',
      },
      home: {
        viewBox: '0 0 25 25',
      },
      logout: {
        viewBox: '0 0 24 24',
      },
      movie: {
        viewBox: '0 0 24 24',
      },
      plus: {
        viewBox: '0 0 24 24',
      },
      search: {
        viewBox: '0 0 24 24',
      },
      serial: {
        viewBox: '0 0 24 25',
      },
      tv: {
        viewBox: '0 0 512 512',
      },
      'user-circle': {
        viewBox: '0 0 24 24',
      },
    },
  },
};
