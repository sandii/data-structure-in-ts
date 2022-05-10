/*
 * Author: Chen Zhi <chenzhibupt@qq.com>
 * Date: May 9, 2022
 *
 * Shell Sort
 *
 * - Invented in 1959, breaking O(n^2) limit firstly.
 * - Upgraded verson of Insert Sort, avoiding move some elements for long distance.
 *
 * - In practice, firstly sort cards in some gap, then gradually shrink gap, until gap becomes 1.
 * - Dr. Knuth suggests gap = gap / 3 + 1, reason is too complicated for common people to understand.
 *
 * - Set gap to 1, you'll find it is no more than Insert Sort.
 * - Use bubbling to do insering in codes bellow.
 */

import { init, swap } from '../common/utils';

const shellSort = (arr: number[]): void => {
  // todo
};

const arr = init();
console.log(arr);
shellSort(arr);
console.log(arr);
