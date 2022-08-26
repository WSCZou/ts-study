/*
 * @Author: jialiangzou
 * @Date: 2022-08-26 21:18:04
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-26 21:20:42
 * @FilePath: /ts-study/type-challenge/03326-medium-bem-style-string/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]
