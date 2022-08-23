/*
 * @Author: jialiangzou
 * @Date: 2022-08-23 21:45:59
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-23 21:55:43
 * @FilePath: /ts-study/type-challenge/03192-medium-reverse/template.ts
 */
type Reverse<T> = T extends [infer first,...infer rest] 
    ? [...Reverse<rest>,first]
    : []