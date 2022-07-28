/*
 * @Author: jialiangzou
 * @Date: 2022-07-28 22:10:40
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-28 22:30:46
 * @FilePath: /ts-study/type-challenge/00949-medium-anyof/template.ts
 */

type IsNotEmpty<T> = 
    T extends '' | [] | false | 0 
        ? false 
        : T extends {} 
            ? keyof T extends never 
                ? false 
                :  true 
            : false
type AnyOf<T extends readonly any[]> = 
    T extends [infer F, ...infer Rest] 
        ?  IsNotEmpty<F> extends true 
            ? true 
            : AnyOf<Rest> 
        : false
