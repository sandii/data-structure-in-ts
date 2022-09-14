/*
 * author: Chenzhi <chenzhibupt@qq.com>
 * date: Sep 9, 2022
 *
 * Brute Force
 * - Same usage with String.propotype.indexOf
 * - Returns index which pattern string (p) matches in target string (s)
 * - Returns -1 when nothing matches
 * - Simply match 2 strings letter by letter
 *
 * - Time complexity: O(m * n)
 */

const bruteForce = (s: string, p: string): number => {
  for (let si = 0; si <= s.length - p.length; si++) {
    for (let pi = 0; pi < p.length; pi++) {
      // dosen't match
      if (s[si + pi] !== p[pi]) {
        break;
      }

      // do match
      if (pi === p.length - 1) {
        return si;
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
