export const generateRandomArray = (length = 20): number[] => {
  const arr: number[] = [];
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * 100);
    arr.push(random);
  }
  return arr;
};
