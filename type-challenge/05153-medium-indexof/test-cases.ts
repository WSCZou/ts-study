/*
 * @Author: jialiangzou
 * @Date: 2022-09-18 21:43:29
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-18 21:59:25
 * @FilePath: /ts-study/type-challenge/05153-medium-indexof/test-cases.ts
 */

import type { Equal } from '@type-challenges/utils'

// your answers
type IndexOf<T, U, Count extends any[] = []> = 
  T extends [infer L, ...infer R]
    ? Equal<L, U> extends true
      ? Count['length'] extends 0
        ? '-1'
        : Count['length']
      : IndexOf<R, U, [...Count, 0]>
    : -1