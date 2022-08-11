/*
 * @Author: jialiangzou
 * @Date: 2022-08-11 21:48:12
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-11 22:03:13
 * @FilePath: /ts-study/type-challenge/02693-medium-endswith/template.ts
 */
type EndsWith<T extends string, U extends string> = T extends `${infer L}${U}` ? true : false