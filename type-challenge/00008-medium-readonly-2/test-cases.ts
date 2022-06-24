/*
 * @Author: jialiangzou
 * @Date: 2022-06-24 15:30:59
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-24 15:32:23
 * @FilePath: /ts-study/type-challenge/00008-medium-readonly-2/test-cases.ts
 */
import type { Alike, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}
