/*
 * @Author: jialiangzou
 * @Date: 2022-07-12 21:32:46
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-12 21:40:18
 * @FilePath: /ts-study/type-challenge/00119-medium-replaceall/template.ts
 */
type ReplaceAll<S extends string, From extends string, To extends string> = 
    From extends '' 
    ? 
    S : S extends `${infer T}${From}${infer Rest}`
        ? 
        `${T}${To}${ReplaceAll<Rest, From, To>}` : S
    
