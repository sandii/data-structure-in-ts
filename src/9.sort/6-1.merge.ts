/*
 * Author: Chen Zhi <chenzhibupt@qq.com>
 * Date: Sep 1, 2022
 *
 * Merge Sort
 *
 * Recursively split array into 2, until the sub-array only contains 1 element.
 * Merge 2 sorted array back together.
 *
 */

import { init } from '../common/utils';

const merge = (
  left: number[],
  right: number[],
): number[] => {
  let result: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift() as number);
    } else {
      result.push(right.shift() as number);
    }
  }

  if (left.length) {
    result = [...result, ...left];
  }
  if (right.length) {
    result = [...result, ...right];
  }

  return result;
};

const mergeSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);
  const result = merge(left, right);

  return result;
};

let arr = init(40);
console.log(arr);
arr = mergeSort(arr);
console.log(arr);
