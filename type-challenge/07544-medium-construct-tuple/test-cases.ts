/*
 * @Author: jialiangzou
 * @Date: 2022-09-23 21:27:39
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-26 22:18:17
 * @FilePath: /ts-study/type-challenge/07544-medium-construct-tuple/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  // refs: https://juejin.cn/post/7011514545541906469
  //@ts-ignore
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>,
]
