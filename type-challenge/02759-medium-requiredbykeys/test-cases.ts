/*
 * @Author: jialiangzou
 * @Date: 2022-08-15 22:01:22
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-15 22:02:43
 * @FilePath: /ts-study/type-challenge/02759-medium-requiredbykeys/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}

type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
]
