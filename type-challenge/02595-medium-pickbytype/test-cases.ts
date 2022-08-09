/*
 * @Author: jialiangzou
 * @Date: 2022-08-09 16:06:18
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-09 16:06:47
 * @FilePath: /ts-study/type-challenge/02595-medium-pickbytype/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]
