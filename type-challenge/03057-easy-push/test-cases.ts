/*
 * @Author: jialiangzou
 * @Date: 2022-06-20 22:38:36
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-20 22:39:08
 * @FilePath: /ts-study/type-challenge/03057-easy-push/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]