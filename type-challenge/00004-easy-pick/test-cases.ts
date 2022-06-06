/*
 * @Author: jialiangzou
 * @Date: 2022-05-20 17:30:35
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-06 22:50:34
 * @FilePath: /ts-study/type-challenge/00004-easy-pick/test-cases.ts
 */

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}