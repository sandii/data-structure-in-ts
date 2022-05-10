/*
 * Author: Chen Zhi <chenzhibupt@qq.com>
 * Date: May 9, 2022
 *
 * Insert Sort
 *
 * A lot like poker game, find place for poker card in sorted cards.
 */

import { init, swap } from '../common/utils';

const insertSort = (arr: number[]): void => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j + 1, j);
      } else {
        break;
      }
    }
  }
};

const arr = init();
console.log(arr);
insertSort(arr);
console.log(arr);
