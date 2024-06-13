export default function addCommasToPersianNumber(persianNumber) {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";

  const standardNumber = persianNumber?.replace(/[۰-۹]/g, (digit) => {
    return persianDigits.indexOf(digit).toString();
  });

  const trimmedStandardNumber = standardNumber?.replace(
    /(\.\d*?[1-9])0+|\.0*$/,
    "$1"
  );

  const withCommas = trimmedStandardNumber?.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  const persianWithCommas = withCommas?.replace(/[0-9]/g, (digit) => {
    return persianDigits[parseInt(digit)];
  });

  return persianWithCommas;
}
