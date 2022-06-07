/*
 * @Author: jialiangzou
 * @Date: 2022-06-07 22:24:46
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-07 22:25:16
 * @FilePath: /ts-study/type-challenge/00011-easy-tuple-to-object/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>