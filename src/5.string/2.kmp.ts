/*
 * author: Chenzhi <chenzhibupt@qq.com>
 * date: Sep 9, 2022
 *
 * KMP
 * - Invented in 1977 by 3 mathematicians Knuth, Morris and Pratt
 * - So people name this algorithm by first letters of their family names
 *
 * - Study shows when not match:
 * 1. Moving back SI (target string index) is totally unnecissary
 * 2. Moving back PI (pattern string index) to start every time is also unnecissary
 *
 * - Key of this algorithm is to calculate: HOW TO MOVE BACK PI in different situations
 * - We use an array next[] to decide WHERE WE MOVE BACK PI:
 * - 1. next[0] = 0
 * - 2. next[pi] is length of same prefix and affix on sub-string before pi
 *
 * - For example:
 * pi      0 1 2 3 4 5 6
 * pattern A B A B A C D
 * next[]  0 0 0 1 2 3 0
 *
 * - Exlain:
 * next[0] = 0
 * next[1] = 0: 'A' has no same prefix and affix
 * next[2] = 0: 'AB' has no same prefix and affix
 * next[3] = 1: 'ABA' has same prefix and affix 'A'
 * next[4] = 2: 'ABAB' has same prefix and affix 'AB'
 * next[5] = 3: 'ABABA' has same prefix and affix 'ABA'
 * next[6] = 0: 'ABABAC' has no same prefix and affix
 *
 * - Now we have next[] array, which can tell where PI should be at next step if not match
 *
 * - Time complexity: O(m + n)
 */

const getNextArr = (p: string): number[] => {
  const next: number[] = [];
  next[0] = 0;
  next[1] = 0;

  let sta = 0;
  let end = 1;

  while (end + 1 < p.length) {
    if (p[sta] === p[end]) {
      sta++;
    } else {
      sta = 0;
    }
    end++;

    next[end] = sta;
  }

  return next;
};

const kmp = (s: string, p: string): number => {
  if (s.length === 0 || p.length === 0) return -1;

  let si = 0;
  let pi = 0;
  const next = getNextArr(p);

  while (si < s.length && pi < p.length) {
    if (s[si] === p[pi]) {
      si++;
      pi++;
      continue;
    }

    if (pi === 0) {
      si++;
    } else {
      pi = next[pi];
    }
  }

  if (pi === p.length) {
    return si - pi;
  } else {
    return -1;
  }
};

console.log(getNextArr('ABABACD')); // 0 0 0 1 2 3 0

console.log(kmp('hello', 'hel')); // 0
console.log(kmp('hello', 'ell')); // 1
console.log(kmp('hello', 'loo')); // -1
console.log(kmp('hello', 'll')); // 2
console.log(kmp('hello', '')); // -1
console.log(kmp('hello', 'asdf')); // -1

console.log(kmp('abcabx', 'abx')); // 3
console.log(kmp('ababababax', 'abx')); // -1
console.log(kmp('abcabcabcabc', 'abcd')); // -1
