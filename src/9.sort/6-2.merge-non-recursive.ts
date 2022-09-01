/*
 * Author: Chen Zhi <chenzhibupt@qq.com>
 * Date: Sep 2, 2022
 *
 * Merge Sort - Non-recursive
 *
 * Using loops instead of recursion to avoid high memory cost.
 * Set sub-array length to 1, and merge sub-arrays 2 by 2.
 * And double sub-array length every round.
 * Stop before sub-array length grows greater than parent array.
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

const subSort = (
  arr: number[],
  subLen: number,
): number[] => {
  let result: number[] = [];

  for (let sta = 0; sta < arr.length; sta += subLen * 2) {
    const left = arr.slice(sta, sta + subLen);
    const right = arr.slice(sta + subLen, sta + subLen * 2);

    const mergedArr = merge(left, right);
    result = [...result, ...mergedArr];
  }

  return result;
};

const mergeSort = (arr: number[]): number[] => {
  let result: number[] = arr.slice();

  for (let subLen = 1; subLen < result.length; subLen *= 2) {
    result = subSort(result, subLen);
  }

  return result;
};

let arr = init(32);
console.log(arr);
arr = mergeSort(arr);
console.log(arr);
