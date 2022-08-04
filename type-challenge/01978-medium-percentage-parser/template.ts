/*
 * @Author: jialiangzou
 * @Date: 2022-08-04 22:15:06
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-04 22:28:26
 * @FilePath: /ts-study/type-challenge/01978-medium-percentage-parser/template.ts
 */
type Parser1<T> = T extends `${infer K}${infer Rest}` ? K extends '+'|'-' ? K : '' : '';
type Parser2<T> = T extends `${infer K}%` ?  '%' : '';
type Parser3<T> = T extends `${Parser1<T>}${infer K}${Parser2<T>}` ?  K : '';
type PercentageParser<A extends string> = [Parser1<A>, Parser3<A>, Parser2<A>]