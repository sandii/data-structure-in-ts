/*
 * Author: Chen Zhi <chenzhibupt@qq.com>
 * Date: May 9, 2022
 *
 * Quick Sort
 *
 * - Find array pivot, put smaller values to its left and bigger values to its right
 * - Process left and right arrays recursively
 *
 * - In practice, we firstly put pivot to leftest
 * - Traverse array, make smallers left and biggers right
 * - Swap pivot and rightest of smallers
 */

import { init, swap } from '../common/utils';

const quickSort = (
  arr: number[],
  low: number,
  high: number,
): void => {
  if (low >= high) return;
  let pivotKey = Math.floor((low + high) / 2);
  const pivotValue = arr[pivotKey];
  swap(arr, low, pivotKey);
  let writer = low;
  for (let i = writer + 1; i <= high; i++) {
    if (arr[i] < pivotValue) {
      writer++;
      swap(arr, i, writer);
    }
  }
  swap(arr, low, writer);
  pivotKey = writer;
  quickSort(arr, low, pivotKey - 1);
  quickSort(arr, pivotKey + 1, high);
};

const arr = init();
console.log(arr);
quickSort(arr, 0, arr.length - 1);
console.log(arr);
