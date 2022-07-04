/*
 * @Author: jialiangzou
 * @Date: 2022-07-04 21:46:20
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-04 22:12:08
 * @FilePath: /ts-study/type-challenge/00020-medium-promise-all/template.ts
 */
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
    [P in keyof T] : T[P] extends Promise<infer K> ? K : T[P]
}>
