/*
 * @Author: jialiangzou
 * @Date: 2022-08-08 21:45:24
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-08 21:46:11
 * @FilePath: /ts-study/type-challenge/02257-medium-minusone/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
]
