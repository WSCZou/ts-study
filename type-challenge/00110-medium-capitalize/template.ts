/*
 * @Author: jialiangzou
 * @Date: 2022-07-10 19:41:33
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-10 19:47:33
 * @FilePath: /ts-study/type-challenge/00110-medium-capitalize/template.ts
 */
type MyCapitalize<S extends string> = S extends `${infer T}${infer K}` ? `${Uppercase<T>}${K}` : ''
