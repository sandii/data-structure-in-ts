/*
 * Author: Chen Zhi <chenzhibupt@qq.com>
 * Date: May 9, 2022
 *
 * Bubble Sort
 *
 * Compare two numbers from right side and swap mininum number to left gradually.
 */

import { init, swap } from '../common/utils';

const bubbleSort = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
};

const arr = init();
console.log(arr);
bubbleSort(arr);
console.log(arr);
