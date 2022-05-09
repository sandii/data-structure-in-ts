import { generateRandomArray } from '../common/utils';

const arr = generateRandomArray();
console.log(arr);
arr.sort((a, b) => a - b);
console.log(arr);
