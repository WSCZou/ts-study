/*
 * @Author: jialiangzou
 * @Date: 2022-09-27 22:31:19
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-28 22:13:14
 * @FilePath: /ts-study/type-challenge/08767-medium-combination/template.ts
 */
type Combination<T extends string[], U = T[number], D = U> = D extends string
  ? `${D}` | `${D} ${Combination<[], Exclude<U, D>>}`
  : never