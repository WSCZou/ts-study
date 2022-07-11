/*
 * @Author: jialiangzou
 * @Date: 2022-07-11 21:25:11
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-11 21:43:43
 * @FilePath: /ts-study/type-challenge/00116-medium-replace/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobar', 'foo', 'bar'>, 'barbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]