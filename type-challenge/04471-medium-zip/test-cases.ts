/*
 * @Author: jialiangzou
 * @Date: 2022-09-05 16:26:37
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-05 16:27:38
 * @FilePath: /ts-study/type-challenge/04471-medium-zip/test-cases.ts
 */


import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]
