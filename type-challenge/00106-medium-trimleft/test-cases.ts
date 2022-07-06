/*
 * @Author: jialiangzou
 * @Date: 2022-07-06 21:17:35
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-06 21:18:35
 * @FilePath: /ts-study/type-challenge/00106-medium-trimleft/test-cases.ts
 */

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]
