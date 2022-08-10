/*
 * @Author: jialiangzou
 * @Date: 2022-08-10 22:21:05
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-10 22:21:44
 * @FilePath: /ts-study/type-challenge/02688-medium-startswith/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
  Expect<Equal<StartsWith<'abc', ''>, true>>,
  Expect<Equal<StartsWith<'abc', ' '>, false>>,
]
