/*
 * @Author: jialiangzou
 * @Date: 2022-09-20 21:53:54
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-20 21:59:23
 * @FilePath: /ts-study/type-challenge/05317-medium-lastindexof/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'
import {LastIndexOf} from './template'
type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>,
]
