/*
 * @Author: jialiangzou
 * @Date: 2022-06-15 21:52:22
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-15 21:52:42
 * @FilePath: /ts-study/type-challenge/00533-easy-concat/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]
