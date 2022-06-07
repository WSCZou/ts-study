/*
 * @Author: jialiangzou
 * @Date: 2022-06-07 22:16:09
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-07 22:16:53
 * @FilePath: /ts-study/type-challenge/00007-easy-readonly/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}