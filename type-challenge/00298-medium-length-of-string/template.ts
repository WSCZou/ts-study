/*
 * @Author: jialiangzou
 * @Date: 2022-07-17 21:02:40
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-17 21:12:29
 * @FilePath: /ts-study/type-challenge/00298-medium-length-of-string/template.ts
 */
type LengthOfString<S extends string ,R extends any[] = []> = S extends `${infer First}${infer Rest}`
    ?
    LengthOfString<Rest,[false,...R]>
    : R['length']
