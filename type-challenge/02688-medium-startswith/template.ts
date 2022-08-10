/*
 * @Author: jialiangzou
 * @Date: 2022-08-10 22:21:05
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-10 22:23:05
 * @FilePath: /ts-study/type-challenge/02688-medium-startswith/template.ts
 */
type StartsWith<T extends string, U extends string> = T extends `${U}${infer Rest}` ? true : false