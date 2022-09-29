/*
 * @Author: jialiangzou
 * @Date: 2022-09-29 21:31:51
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-29 21:32:43
 * @FilePath: /ts-study/type-challenge/08987-medium-subsequence/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3] >>,
]
