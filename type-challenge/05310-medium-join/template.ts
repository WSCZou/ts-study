/*
 * @Author: jialiangzou
 * @Date: 2022-09-19 19:56:23
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-19 19:56:56
 * @FilePath: /ts-study/type-challenge/05310-medium-join/template.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>,
]
