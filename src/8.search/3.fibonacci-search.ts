/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 27, 2022
 *
 * Fibonacci Search
 * - URL below helps to understand it:
 * - http://stackoverflow.com/questions/7599479/fibonacci-search
 * - O(logn)
 * - Fibonacci Search helps to partition array as golden ratio
 *
 */

const fibonacci: number[] = [];

const generateFibonacci = (): void => {
  fibonacci[0] = 0;
  fibonacci[1] = 1;

  const MAX = 10;
  for (let i = 2; i < MAX; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
};

const getFibIndex = (arrLen: number): number => {
  let fibIndex = 0;
  while (fibonacci[fibIndex] < arrLen) {
    fibIndex++;
  }
  return fibIndex;
};

const fillArr = (arr: number[], fibIndex: number): void => {
  const max = arr[arr.length - 1];
  const fillNum = fibonacci[fibIndex] - arr.length;
  for (let i = 0; i < fillNum; i++) {
    arr.push(max);
  }
};

const fibonacciSearch = (
  arr: number[],
  target: number,
): number => {
  generateFibonacci();
  const arrLen = arr.length;
  let fibIndex = getFibIndex(arrLen);
  fillArr(arr, fibIndex);

  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = low + fibonacci[fibIndex - 1];
    if (target === arr[mid]) {
      return mid > arrLen - 1 ? arrLen - 1 : mid;
    }
    if (target < arr[mid]) {
      high = mid - 1;
      fibIndex = fibIndex - 1;
    } else {
      low = mid + 1;
      fibIndex = fibIndex - 2; // !!!
    }
  }

  return -1;
};

export default fibonacciSearch;

const arr = [2, 4, 6, 8, 10, 12, 14];

console.log(fibonacciSearch(arr, 2)); // 0
console.log(fibonacciSearch(arr, 1)); // -1
console.log(fibonacciSearch(arr, 6)); // 2
console.log(fibonacciSearch(arr, 14)); // 6
console.log(fibonacciSearch(arr, 100)); // -1
