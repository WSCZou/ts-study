/*
 * @Author: jialiangzou
 * @Date: 2022-07-17 21:02:40
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-17 21:03:33
 * @FilePath: /ts-study/type-challenge/00298-medium-length-of-string/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]
