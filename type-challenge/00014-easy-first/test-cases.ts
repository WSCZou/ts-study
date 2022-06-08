/*
 * @Author: jialiangzou
 * @Date: 2022-06-08 22:39:30
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-08 22:39:53
 * @FilePath: /ts-study/type-challenge/00014-easy-first/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]