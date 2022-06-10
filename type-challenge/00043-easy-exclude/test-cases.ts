/*
 * @Author: jialiangzou
 * @Date: 2022-06-10 23:00:47
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-10 23:01:00
 * @FilePath: /ts-study/type-challenge/00043-easy-exclude/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, Exclude<'a' | 'b' | 'c', 'a' | 'b'>>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]
