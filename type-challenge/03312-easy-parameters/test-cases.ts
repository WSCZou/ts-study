/*
 * @Author: jialiangzou
 * @Date: 2022-06-21 22:21:17
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-21 22:21:25
 * @FilePath: /ts-study/type-challenge/03312-easy-parameters/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {}
const baz = (): void => {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]