/*
 * @Author: jialiangzou
 * @Date: 2022-08-30 14:58:40
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-30 14:59:22
 * @FilePath: /ts-study/type-challenge/04179-medium-flip/template.ts
 */
type Flip<T extends Record<string, any>> = {
  [p in keyof T as `${T[p]}` ]: p
}