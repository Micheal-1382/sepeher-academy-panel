export const convertToPersianDate = (date) => {
  const persianDate = new Date(date).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return persianDate;
};
