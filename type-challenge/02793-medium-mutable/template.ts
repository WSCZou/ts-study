/*
 * @Author: jialiangzou
 * @Date: 2022-08-16 21:50:56
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-16 22:05:14
 * @FilePath: /ts-study/type-challenge/02793-medium-mutable/template.ts
 */
type Mutable<T extends Record<string,any>> = { -readonly [P in keyof T]:T[P] } 