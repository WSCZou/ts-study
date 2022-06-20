/*
 * @Author: jialiangzou
 * @Date: 2022-06-20 22:38:36
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-20 22:38:55
 * @FilePath: /ts-study/type-challenge/03057-easy-push/template.ts
 */
type Push<T extends unknown[], U> = [...T,U]
