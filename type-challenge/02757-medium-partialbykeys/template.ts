/*
 * @Author: jialiangzou
 * @Date: 2022-08-12 16:26:05
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-12 16:36:03
 * @FilePath: /ts-study/type-challenge/02757-medium-partialbykeys/template.ts
 */

// your answers
type MergeObj<T> = {
    [P in keyof T]: T[P]
  }
  type PartialByKeys<T, K = any> = MergeObj<{
    [P in keyof T as P extends K ? P : never]?: T[P] 
  } & {
    [P in Exclude<keyof T, K>]: T[P] 
  }>
  