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

const fibonacciSearch = (
  arr: number[],
  target: number,
): number => {
  return -1;
};

export default fibonacciSearch;

const arr = [2, 4, 6, 8, 10, 12, 14];

console.log(fibonacciSearch(arr, 2)); // 0
console.log(fibonacciSearch(arr, 1)); // -1
console.log(fibonacciSearch(arr, 6)); // 2
console.log(fibonacciSearch(arr, 100)); // -1


