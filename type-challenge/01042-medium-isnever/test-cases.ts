/*
 * @Author: jialiangzou
 * @Date: 2022-07-29 22:26:04
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-29 22:26:25
 * @FilePath: /ts-study/type-challenge/01042-medium-isnever/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]
