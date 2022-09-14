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
