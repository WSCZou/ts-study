/*
 * @Author: jialiangzou
 * @Date: 2022-06-24 15:30:59
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-24 15:51:00
 * @FilePath: /ts-study/type-challenge/00008-medium-readonly-2/template.ts
 */
type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T,K> & {
    readonly [U in K] : T[U]
}
