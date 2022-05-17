/*
 * Author: Chen Zhi <chenzhibupt@qq.com>
 * Date: May 17, 2022
 *
 * Heap Sort
 * - Proposed in 1963, upgrading Selection Sort.
 *
 * - Making use of Max Binary Heap data structrue.
 * - Binary Heap is Complete Binary Tree, in which all level except last is full filled and last level is full filled from left.
 * - Max Heap means every parent node is greater than its children and Min Heap means parent node is lesser.
 *
 * - Relation between array and binary heap:
 *  - parent: i
 *  - left-child: i * 2 + 1
 *  - right-child: i * 2 + 2
 *  - last parent: Math.floor(arr.length / 2 - 1)
 *
 * - First, making max heap from array;
 * - Then, swapping heap top (greatest) and bottom last;
 * - Sorting max heap again and swapping again.
 */

import { init, swap } from '../common/utils';

const heapAdjust = (
  arr: number[],
  sta: number,
  end: number,
): void => {
  if (sta >= end) return;
  if (sta >= arr.length || end >= arr.length) return;
  let parent = sta;
  let child = parent * 2 + 1; // child is left-child
  while (child <= end) {
    if (child + 1 <= end && arr[child + 1] > arr[child]) {
      child++; // child becomes right-child
    }
    if (arr[child] > arr[parent]) {
      swap(arr, child, parent);
      parent = child;
      child = child * 2 + 1;
    } else {
      break;
    }
  }
};

const heapSort = (arr: number[]): void => {
  // making max heap
  const lastParent = Math.floor(arr.length / 2 - 1);
  for (let parent = lastParent; parent >= 0; parent--) {
    heapAdjust(arr, parent, arr.length - 1);
  }
  // sorting begins
  for (let end = arr.length - 1; end >= 0; end--) {
    swap(arr, 0, end);
    heapAdjust(arr, 0, end - 1);
  }
};

const arr = init(40);
console.log(arr);
heapSort(arr);
console.log(arr);
