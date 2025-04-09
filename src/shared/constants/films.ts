interface TopFilmsConfig {
  top: number[];
  premiers: {
    year: number;
    month: string;
  };
}
export const FILMS: TopFilmsConfig = {
  top: [301, 435, 448, 463, 535341, 522, 438, 447, 436, 424],
  premiers: { year: 2025, month: 'FEBRUARY' },
};


