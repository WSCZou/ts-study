/*
 * @Author: jialiangzou
 * @Date: 2022-07-21 20:32:51
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-21 20:33:20
 * @FilePath: /ts-study/type-challenge/00531-medium-string-to-union/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
]
