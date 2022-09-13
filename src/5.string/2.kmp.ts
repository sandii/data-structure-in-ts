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
 * - Time complexity: O(m + n)
 */
