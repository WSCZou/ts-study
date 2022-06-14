/*
 * @Author: jialiangzou
 * @Date: 2022-06-14 22:01:04
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-14 22:01:09
 * @FilePath: /ts-study/type-challenge/00268-easy-if/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>
