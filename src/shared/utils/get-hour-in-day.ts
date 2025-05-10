export function getHourInDay() {
  const now = new Date();
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0, 0, 0
  );

  const diff = tomorrow.getTime() - now.getTime();

  return Math.ceil(diff / (1000 * 60 * 60));
}