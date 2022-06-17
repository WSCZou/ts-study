/*
 * @Author: jialiangzou
 * @Date: 2022-06-15 21:52:22
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-17 22:31:02
 * @FilePath: /ts-study/type-challenge/00898-easy-includes/template.ts
 */
import type { Equal } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> = T extends [infer First,...infer Rest] 
    ? Equal<First,U> extends true
        ? true : Includes<Rest,U>
    :
    false 