/*
 * @Author: jialiangzou
 * @Date: 2022-06-09 22:33:21
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-09 22:33:52
 * @FilePath: /ts-study/type-challenge/00018-easy-tuple-length/00014-easy-first/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]