/*
 * @Author: jialiangzou
 * @Date: 2022-08-19 22:48:54
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-19 22:49:28
 * @FilePath: /ts-study/type-challenge/03062-medium-shift/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
]
