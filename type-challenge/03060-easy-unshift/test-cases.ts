/*
 * @Author: jialiangzou
 * @Date: 2022-06-20 22:36:39
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-20 22:37:10
 * @FilePath: /ts-study/type-challenge/03060-easy-unshift/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]
