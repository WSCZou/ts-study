/*
 * @Author: jialiangzou
 * @Date: 2022-07-11 21:25:11
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-11 21:43:19
 * @FilePath: /ts-study/type-challenge/00116-medium-replace/template.ts
 */
type Replace<S extends string, From extends string, To extends string> = 
    From extends ''
    ?
    S : S extends `${infer T}${From}${infer rest}`
        ?
        `${T}${To}${rest}`: S