export const init = (length = 20): number[] => {
  const arr: number[] = [];
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * 100);
    arr.push(random);
  }
  return arr;
};

export const swap = (
  arr: number[],
  i: number,
  j: number,
): void => {
  const min = 0;
  const max = arr.length - 1;
  if (i < min || i > max || j < min || j > max) return;
  if (i === j) return;

  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
