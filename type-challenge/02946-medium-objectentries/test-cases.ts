/*
 * @Author: jialiangzou
 * @Date: 2022-08-18 21:32:42
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-18 21:33:25
 * @FilePath: /ts-study/type-challenge/02946-medium-objectentries/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
]
