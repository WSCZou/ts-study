/*
 * @Author: jialiangzou
 * @Date: 2022-09-06 19:37:45
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-06 19:38:36
 * @FilePath: /ts-study/type-challenge/04484-medium-istuple/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>,
]