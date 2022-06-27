/*
 * @Author: jialiangzou
 * @Date: 2022-06-27 22:23:02
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-27 22:31:25
 * @FilePath: /ts-study/type-challenge/00009-medium-deep-readonly/template.ts
 */
type DeepReadonly<T> = {
    readonly [K in keyof T] : T[K] extends Object 
    ? 
    T[K] extends Function
        ?
        T[K]
        :
        DeepReadonly<T[K]>
    :
    T[K]
}

