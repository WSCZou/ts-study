/*
 * @Author: jialiangzou
 * @Date: 2022-06-28 21:02:59
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-28 21:03:07
 * @FilePath: /ts-study/type-challenge/00010-medium-tuple-to-union/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]
