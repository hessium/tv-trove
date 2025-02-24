export const getLastMonthDates = () => {
  const today = new Date();
  const year =
    today.getMonth() === 0 ? today.getFullYear() - 1 : today.getFullYear();
  const month = today.getMonth() === 0 ? 11 : today.getMonth() - 1;

  const from = new Date(year, month, 1);
  const to = new Date(year, month + 1, 0);

  const format = (date: Date) => date.toISOString().split('T')[0]; // Формат YYYY-MM-DD
  return { from: format(from), to: format(to) };
};
