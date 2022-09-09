/*
 * author: Chenzhi <chenzhibupt@qq.com>
 * date: Sep 9, 2022
 *
 * Brute Force
 * - Same usage with String.propotype.indexOf
 * - Returns index which pattern string (p) matches in parent string (s)
 * - Returns -1 when nothing matches
 * - Simply match 2 strings letter by letter
 * 
 * - Time complexity: O(m * n)
 */

const bruteForce = (s: string, p: string): number => {
  for (let i = 0; i <= s.length - p.length; i++) {
    for (let j = 0; j < p.length; j++) {
      // dosen't match
      if (s[i + j] !== p[j]) {
        break;
      }

      // do match
      if (j === p.length - 1) {
        return i;
      }
    }
  }
  return -1;
};

console.log(bruteForce('hello', 'hel')); // 0
console.log(bruteForce('hello', 'ell')); // 1
console.log(bruteForce('hello', 'loo')); // -1
console.log(bruteForce('hello', 'll')); // 2
console.log(bruteForce('hello', '')); // -1
console.log(bruteForce('hello', 'asdf')); // -1
console.log(bruteForce('hello', '')); // -1
