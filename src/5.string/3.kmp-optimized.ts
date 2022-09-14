/*
 * author: Chenzhi <chenzhibupt@qq.com>
 * date: Sep 13, 2022
 *
 * Optimized KMP
 * - When current letters are not match, PI will move back according to next[]
 * - But PI may move back to position with same value, so next comparison must be not match
 * - So next[] should be optimized:
 * - If moving back position has same value, move back again
 *
 * - For example:
 * pi      0 1 2 3 4 5 6
 * pattern A B A B A C D
 * _next[] 0 0 0 1 2 3 0
 * next[]  0 0 0 0 0 3 0
 *
 * - Explain:
 * next[3] = _next[1] = 0: pattern[3] === pattern[1], move back again
 * next[4] = _next[2] = 0: pattern[4] === pattern[2], move back again
 * next[5] = _next[5] = 3: pattern[3] !== pattern[5], move back no more
 *
 * ## Example:
 *
 * ababcccccc
 * ||||x
 * ababacd
 *
 * - Normal KMP: Move back to 2, match fails again
 * ababcccccc
 *   ||x
 *   ababacd
 *
 * - Optimized KMP: Move back to 0 directily
 * ababcccccc
 *     x
 *     ababacd
 *
 */

const getNext = (p: string): number[] => {
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

    if (p[sta] === p[end]) {
      next[end] = next[sta];
    } else {
      next[end] = sta;
    }
  }

  return next;
};

const betterKMP = (s: string, p: string): number => {
  if (!s.length || !p.length) return -1;

  const next = getNext(p);
  let si = 0;
  let pi = 0;

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

console.log(getNext('ababacd')); // 0 0 0 0 0 3 0

console.log(betterKMP('hello', 'hel')); // 0
console.log(betterKMP('hello', 'ell')); // 1
console.log(betterKMP('hello', 'loo')); // -1
console.log(betterKMP('hello', 'll')); // 2
console.log(betterKMP('hello', '')); // -1
console.log(betterKMP('hello', 'asdf')); // -1
console.log(betterKMP('abcabx', 'abx')); // 3
console.log(betterKMP('ababababax', 'abx')); // -1
console.log(betterKMP('abcabcabcabc', 'abcd')); // -1
