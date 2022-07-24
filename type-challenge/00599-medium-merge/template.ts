/*
 * @Author: jialiangzou
 * @Date: 2022-07-24 22:11:54
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-24 22:19:28
 * @FilePath: /ts-study/type-challenge/00599-medium-merge/template.ts
 */
type Merge<F, S> = {
    [K in keyof F | keyof S] : K extends keyof S
        ? S[K]
        : K extends keyof F
        ? F[K]
        : never;
}