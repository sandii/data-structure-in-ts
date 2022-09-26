/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 27, 2022
 *
 * Interpolation Search
 * - Optimized binary search
 * - Estimate position ratio of target in array
 *
 */

const interpolationSearch = (
  arr: number[],
  target: number,
): number => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const ratio =
      (target - arr[low]) / (arr[high] - arr[low]);
    const mid = Math.floor(low + (high - low) * ratio);
    if (arr[mid] === target) return mid;

    if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

export default interpolationSearch;

const arr = [2, 4, 6, 8, 10, 12, 14];

console.log(interpolationSearch(arr, 2)); // 0
console.log(interpolationSearch(arr, 1)); // -1
console.log(interpolationSearch(arr, 6)); // 2
console.log(interpolationSearch(arr, 100)); // -1
