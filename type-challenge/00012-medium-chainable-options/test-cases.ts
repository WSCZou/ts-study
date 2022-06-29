/*
 * @Author: jialiangzou
 * @Date: 2022-06-29 22:12:01
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-29 22:12:19
 * @FilePath: /ts-study/type-challenge/00012-medium-chainable-options/test-cases.ts
 */
import type { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get()

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
]

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}
