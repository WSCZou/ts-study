/*
 * @Author: jialiangzou
 * @Date: 2022-08-22 22:13:46
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-23 21:48:57
 * @FilePath: /ts-study/type-challenge/03192-medium-reverse/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
]
