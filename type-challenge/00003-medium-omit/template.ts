/*
 * @Author: jialiangzou
 * @Date: 2022-06-23 21:53:24
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-23 21:57:39
 * @FilePath: /ts-study/type-challenge/00003-medium-omit/template.ts
 */
type MyOmit<T, K> = {
    [P in keyof T as P extends K ? never : P]: T[P]
}