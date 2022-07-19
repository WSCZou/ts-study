/*
 * @Author: jialiangzou
 * @Date: 2022-07-19 21:28:40
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-19 22:21:54
 * @FilePath: /ts-study/type-challenge/00527-medium-append-to-object/template.ts
 */
type AppendToObject<T, U extends string, V> = {
    [key in keyof T | U] : key extends keyof T ? T[key] : V
}

// 这里要约束 U extends string 不然 [key in keyof T | U] U 的 type 会是 对象键 不允许的类型