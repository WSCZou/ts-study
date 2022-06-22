/*
 * @Author: jialiangzou
 * @Date: 2022-06-22 22:25:12
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-22 22:28:44
 * @FilePath: /ts-study/type-challenge/00002-medium-return-type/template.ts
 */
type MyReturnType<T> = T extends (...args: any) => infer P ? P : never
