/*
 * @Author: jialiangzou
 * @Date: 2022-08-16 21:50:56
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-16 21:52:38
 * @FilePath: /ts-study/type-challenge/02793-medium-mutable/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type List = [1, 2, 3]

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>,
]

type errors = [
  // @ts-expect-error
  Mutable<'string'>,
  // @ts-expect-error
  Mutable<0>,
]