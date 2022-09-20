/*
 * @Author: jialiangzou
 * @Date: 2022-09-20 21:53:54
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-20 21:59:36
 * @FilePath: /ts-study/type-challenge/05317-medium-lastindexof/template.ts
 */
import type { Equal } from '@type-challenges/utils'

export type LastIndexOf<T extends unknown[], U> = T extends [...infer R, infer L]
  ? Equal<U, L> extends true
    ? R['length']
    : LastIndexOf<R, U>
  : -1