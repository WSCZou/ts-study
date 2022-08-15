/*
 * @Author: jialiangzou
 * @Date: 2022-08-15 22:01:22
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-15 22:28:50
 * @FilePath: /ts-study/type-challenge/02759-medium-requiredbykeys/template.ts
 */

type RequiredByKeys<T, K extends string | number | symbol = any> = MergeObj<
  {
    [U in keyof T as U extends K ? U : never]-? : T[U]
  }
  &
  {
    [U in Exclude<keyof T, K>]?: T[U]
  }
>

