/*
 * @Author: jialiangzou
 * @Date: 2022-08-01 21:41:36
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-01 21:46:30
 * @FilePath: /ts-study/type-challenge/01097-medium-isunion/template.ts
 */
// your answers
type IsUnion<T, K = T> = [T] extends [never]? false : T extends T ? [Exclude<K, T>] extends [never] ? false : true : never