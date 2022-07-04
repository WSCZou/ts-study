/*
 * @Author: jialiangzou
 * @Date: 2022-07-04 21:46:20
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-04 21:46:38
 * @FilePath: /ts-study/type-challenge/00020-medium-promise-all/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
]
