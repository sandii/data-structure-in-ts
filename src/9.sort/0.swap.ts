/*
* Author: Chen Zhi <chenzhibupt@qq.com>
* Date: May 9, 2022
*
* Swap Sort
* 
* - Swap mininum number to leftest.
* - Actually another version of Select Sort.
* - Simplest sort algorithm.
*/

import { init, swap } from '../common/utils';

const swapSort = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        swap(arr, i, j);
      }
    }
  }
};

const arr = init();
console.log(arr);
swapSort(arr);
console.log(arr);
