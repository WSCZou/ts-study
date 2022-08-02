/*
 * @Author: jialiangzou
 * @Date: 2022-08-02 21:51:20
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-02 22:06:03
 * @FilePath: /ts-study/type-challenge/01130-medium-replacekeys/template.ts
 */
type ReplaceKeys<U, T, Y> = {[K in keyof U] : K extends T ? K extends keyof Y ? Y[K] : never : U[K]}