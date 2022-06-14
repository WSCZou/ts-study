/*
 * @Author: jialiangzou
 * @Date: 2022-06-13 22:20:02
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-13 22:20:24
 * @FilePath: /ts-study/type-challenge/00189-easy-awaited/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
]

// @ts-expect-error
type error = MyAwaited<number>
