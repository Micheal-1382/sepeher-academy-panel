export const calculateTimePassed = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const diffInMillis = endDate - startDate;

  const diffInMinutes = Math.floor(diffInMillis / 1000 / 60);

  const hours = Math.floor(diffInMinutes / 60);
  return `${hours} ساعت`;
};
