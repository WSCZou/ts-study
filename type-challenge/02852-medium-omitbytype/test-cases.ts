/*
 * @Author: jialiangzou
 * @Date: 2022-08-17 22:10:23
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-17 22:11:17
 * @FilePath: /ts-study/type-challenge/02852-medium-omitbytype/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<Equal<OmitByType<Model, string>, { count: number; isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<OmitByType<Model, number>, { name: string; isReadonly: boolean; isEnable: boolean }>>,
]
