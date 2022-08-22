/*
 * @Author: jialiangzou
 * @Date: 2022-08-22 22:13:46
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-22 22:14:24
 * @FilePath: /ts-study/type-challenge/03188-medium-tuple-to-nested-object/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]