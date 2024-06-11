export const getQueryParams = (search) => {
  return Object.fromEntries(new URLSearchParams(search));
};
