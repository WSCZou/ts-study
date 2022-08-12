/*
 * @Author: jialiangzou
 * @Date: 2022-08-12 16:26:05
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-12 16:27:40
 * @FilePath: /ts-study/type-challenge/02757-medium-partialbykeys/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string
}

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
]
