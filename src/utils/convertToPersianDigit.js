export default function convertToPersianDigit(digit) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return digit?.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}
