/*
 * @Author: jialiangzou
 * @Date: 2022-06-30 22:11:05
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-30 22:11:17
 * @FilePath: /ts-study/type-challenge/00015-medium-last/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]
