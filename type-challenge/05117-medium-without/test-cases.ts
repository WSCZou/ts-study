/*
 * @Author: jialiangzou
 * @Date: 2022-09-13 22:34:36
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-13 22:35:28
 * @FilePath: /ts-study/type-challenge/05117-medium-without/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]
