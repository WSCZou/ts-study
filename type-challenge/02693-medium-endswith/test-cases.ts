/*
 * @Author: jialiangzou
 * @Date: 2022-08-11 21:48:12
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-11 21:50:18
 * @FilePath: /ts-study/type-challenge/02693-medium-endswith/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>,
]
