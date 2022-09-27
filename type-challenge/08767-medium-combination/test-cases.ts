/*
 * @Author: jialiangzou
 * @Date: 2022-09-27 22:31:19
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-27 22:31:48
 * @FilePath: /ts-study/type-challenge/08767-medium-combination/test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Combination<['foo', 'bar', 'baz']>,
  'foo' | 'bar' | 'baz' | 'foo bar' | 'foo bar baz' | 'foo baz' | 'foo baz bar' | 'bar foo' | 'bar foo baz' | 'bar baz' | 'bar baz foo' | 'baz foo' | 'baz foo bar' | 'baz bar' | 'baz bar foo'>>,
]
