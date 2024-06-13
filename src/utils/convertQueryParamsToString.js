export const convertQueryParamsToString = (queryParams) => {
  const searchParams = new URLSearchParams(queryParams);
  return `?${searchParams.toString()}`;
};
