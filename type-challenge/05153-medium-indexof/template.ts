/*
 * @Author: jialiangzou
 * @Date: 2022-09-18 21:43:29
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-18 21:45:00
 * @FilePath: /ts-study/type-challenge/05153-medium-indexof/template.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
]