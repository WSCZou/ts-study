/*
 * @Author: jialiangzou
 * @Date: 2022-06-23 21:53:24
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-23 21:53:52
 * @FilePath: /ts-study/type-challenge/00003-medium-omit/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}
