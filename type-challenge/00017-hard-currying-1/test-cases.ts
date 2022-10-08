/*
 * @Author: jialiangzou
 * @Date: 2022-10-08 22:13:59
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-10-08 22:14:35
 * @FilePath: /ts-study/type-challenge/00017-hard-currying-1/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)
const curried3 = Currying(() => true)

type cases = [
  Expect<Equal<
    typeof curried1, (a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
  Expect<Equal<typeof curried3, () => true>>,
]
