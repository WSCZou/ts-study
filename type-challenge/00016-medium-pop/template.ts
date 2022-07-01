/*
 * @Author: jialiangzou
 * @Date: 2022-07-01 22:20:59
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-01 22:28:20
 * @FilePath: /ts-study/type-challenge/00016-medium-pop/template.ts
 */
type Pop<T extends any[]> = T extends [...infer O, infer k] ? O : never;