/*
 * @Author: jialiangzou
 * @Date: 2022-06-30 22:11:05
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-30 22:15:37
 * @FilePath: /ts-study/type-challenge/00015-medium-last/template.ts
 */
type Last<T extends any[]> = T extends [...infer O,infer K] ? K : never
