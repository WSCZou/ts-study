/*
 * @Author: jialiangzou
 * @Date: 2022-07-13 21:22:04
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-13 21:22:26
 * @FilePath: /ts-study/type-challenge/00191-medium-append-argument/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
]
