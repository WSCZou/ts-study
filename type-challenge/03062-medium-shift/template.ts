/*
 * @Author: jialiangzou
 * @Date: 2022-08-19 22:48:54
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-19 22:49:18
 * @FilePath: /ts-study/type-challenge/03062-medium-shift/template.ts
 */
type Shift<T> = T extends [infer First, ... infer Rest] ? Rest : []