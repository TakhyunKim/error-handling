export const getImage = async () => {
  const response = await fetch("https://picsum.photos/200/300");

  return response;
};
