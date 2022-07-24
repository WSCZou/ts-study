/*
 * @Author: jialiangzou
 * @Date: 2022-07-24 22:11:54
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-24 22:12:14
 * @FilePath: /ts-study/type-challenge/00599-medium-merge/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]