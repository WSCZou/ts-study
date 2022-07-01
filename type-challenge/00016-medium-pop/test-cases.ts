/*
 * @Author: jialiangzou
 * @Date: 2022-07-01 22:20:59
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-01 22:21:21
 * @FilePath: /ts-study/type-challenge/00016-medium-pop/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
]