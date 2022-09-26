/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 26, 2022
 *
 * Binary Search
 * - O(logn)
 *
 */

const binarySeach = (
  arr: number[],
  target: number,
): number => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;

    if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

export default binarySeach;

const arr = [2, 4, 6, 8, 10];

console.log(binarySeach(arr, 2)); // 0
console.log(binarySeach(arr, 1)); // -1
console.log(binarySeach(arr, 6)); // 2
console.log(binarySeach(arr, 100)); // -1
