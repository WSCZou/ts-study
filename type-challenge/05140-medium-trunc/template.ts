/*
 * @Author: jialiangzou
 * @Date: 2022-09-14 21:59:49
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-14 22:00:29
 * @FilePath: /ts-study/type-challenge/05140-medium-trunc/template.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trunc<0.1>, '0'>>,
  Expect<Equal<Trunc<1.234>, '1'>>,
  Expect<Equal<Trunc<12.345>, '12'>>,
  Expect<Equal<Trunc<-5.1>, '-5'>>,
  Expect<Equal<Trunc<'1.234'>, '1'>>,
  Expect<Equal<Trunc<'-10.234'>, '-10'>>,
  Expect<Equal<Trunc<10>, '10'>>,
]
