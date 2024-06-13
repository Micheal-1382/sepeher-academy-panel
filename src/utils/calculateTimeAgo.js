import convertToPersianDigit from "./convertToPersianDigit";

export default function calculateTimeAgo(lastUpdated) {
  const now = new Date();
  const updatedTime = new Date(lastUpdated);
  const seconds = Math.floor((now.getTime() - updatedTime.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return `${convertToPersianDigit(interval)} سال پیش`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${convertToPersianDigit(interval)} ماه پیش`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${convertToPersianDigit(interval)} روز پیش`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${convertToPersianDigit(interval)} ساعت پیش`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${convertToPersianDigit(interval)} دقیقه پیش`;
  }
  return `${Math.floor(seconds)} seconds ago`;
}
