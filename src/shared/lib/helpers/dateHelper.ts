export const transformDate = (date: string) => new Date(date).toLocaleDateString('ru-RU', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});
