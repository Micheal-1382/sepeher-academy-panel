export const validateImageAddress = (address, fallbackImage) => {
  if (!address) return fallbackImage;
  if (address.startsWith("http://") || address.startsWith("https://")) {
    return address;
  } else {
    return fallbackImage;
  }
};
