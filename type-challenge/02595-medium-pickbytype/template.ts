/*
 * @Author: jialiangzou
 * @Date: 2022-08-09 16:06:18
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-09 16:12:03
 * @FilePath: /ts-study/type-challenge/02595-medium-pickbytype/template.ts
 */
type PickByType<T, U> = {
    [K in keyof T as (T[K] extends U ? K : never)]: T[K]
}