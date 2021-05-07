export const getRandomInRange = (start: number = 1, end: number) => {
  return Math.random() * (end - start) + start;
};
