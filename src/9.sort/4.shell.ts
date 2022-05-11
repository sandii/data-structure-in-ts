/*
 * Author: Chen Zhi <chenzhibupt@qq.com>
 * Date: May 9, 2022
 *
 * Shell Sort
 *
 * - Invented in 1959, breaking O(n^2) limit historically.
 * - Upgraded verson of Insert Sort, avoiding to move some elements for long distance.
 *
 * - In practice, firstly sort elements in some gap, then gradually shrink gap, until gap becomes 1.
 * - Dr. Knuth suggests gap = gap / 3 + 1, reason is too complicated for common people to understand.
 *
 * - Set gap to 1, you'll find it is no more than Insert Sort.
 * - Use bubbling to do insering in codes bellow.
 */

import { init, swap } from '../common/utils';

const updateGap = (gap: number): number => {
  return gap <= 1 ? 0 : Math.floor(gap / 3 + 1);
};

const shellSort = (arr: number[]): void => {
  for (
    let gap = updateGap(arr.length);
    gap > 0;
    gap = updateGap(gap)
  ) {
    for (let i = gap; i < arr.length; i++) {
      for (let j = i - gap; j >= 0; j--) {
        if (arr[j + gap] < arr[j]) {
          swap(arr, j + gap, j);
        } else {
          break;
        }
      }
    }
  }
};

const arr = init();
console.log(arr);
shellSort(arr);
console.log(arr);
