/*
 * @Author: jialiangzou
 * @Date: 2022-07-21 20:32:51
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-21 20:41:53
 * @FilePath: /ts-study/type-challenge/00531-medium-string-to-union/template.ts
 */
type StringToUnion<T extends string> = T extends `${infer K}${infer Rest}` ? K | StringToUnion<Rest> : never
