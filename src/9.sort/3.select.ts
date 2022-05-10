/*
 * Author: Chen Zhi <chenzhibupt@qq.com>
 * Date: May 9, 2022
 *
 * Select Sort
 *
 * Similar to Swap Sort, but record minimum number and swap to leftest till very end of every round.
 */

import { init, swap } from '../common/utils';

const selectSort = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(arr, min, i);
    }
  }
};

const arr = init();
console.log(arr);
selectSort(arr);
console.log(arr);
