/*
 * @Author: jialiangzou
 * @Date: 2022-09-02 22:26:57
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-02 22:27:45
 * @FilePath: /ts-study/type-challenge/04425-medium-greater-than/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
]
