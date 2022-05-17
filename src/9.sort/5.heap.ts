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
  parent: number,
  end: number,
): void => {
  if (parent >= end) return;
  if (parent >= arr.length || end >= arr.length) return;
  
  // child is left-child firstly
  let child = parent * 2 + 1;
  if (child > end) return;

  // if right child is greater
  // child becomes right-child
  if (child + 1 <= end && arr[child + 1] > arr[child]) {
    child++;
  }
  
  // if parent is greatest, stop
  if (arr[parent] >= arr[child]) return;

  // sink smaller element down
  swap(arr, child, parent);

  // check whether smaller element should go on sinking
  heapAdjust(arr, child, end);
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
