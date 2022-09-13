/*
 * @Author: jialiangzou
 * @Date: 2022-09-13 22:34:36
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-13 22:37:21
 * @FilePath: /ts-study/type-challenge/05117-medium-without/template.ts
 */
type Without<T, U> = T extends [infer H, ...infer T]
  ? H extends (U extends number[] ? U[number] : U)
    ? [...Without<T, U>]
    : [H, ...Without<T, U>]
  : [];