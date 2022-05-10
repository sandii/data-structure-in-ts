/*
 * Author: Chen Zhi <chenzhibupt@qq.com>
 * Date: May 9, 2022
 *
 * Quick Sort
 * 
 * - Find array pivot, put smaller values to its left and bigger values to its right
 * - Process left and right arrays recursively
 * 
 * - In practice, we firstly put pivot to leftest
 * - Traverse array, make smallers left and biggers right
 * - Swap pivot and rightest of smallers
 */

import { init, swap } from '../common/utils';

const quickSort = (arr: number[]): void => {

};

const arr = init();
console.log(arr);
quickSort(arr);
console.log(arr);
