/*
 * @Author: jialiangzou
 * @Date: 2022-09-09 22:23:02
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-09 22:24:26
 * @FilePath: /ts-study/type-challenge/04803-medium-trim-right/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<TrimRight<''>, ''>>,
  Expect<Equal<TrimRight<'\n\t '>, ''>>,
]
