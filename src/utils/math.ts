export const getRandomInRange = (start: number = 1, end: number) => {
  return Math.floor(Math.random() * (end - start) + start);
};
