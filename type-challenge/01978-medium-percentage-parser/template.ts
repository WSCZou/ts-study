/*
 * @Author: jialiangzou
 * @Date: 2022-08-04 22:15:06
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-04 22:48:32
 * @FilePath: /ts-study/type-challenge/01978-medium-percentage-parser/template.ts
 */
// refs:https://www.bilibili.com/video/BV11u41117Lg/?spm_id_from=333.788&vd_source=ba140baa169d5605d095074cdd29d32e
type Parser1<T> = T extends `${infer K}${infer Rest}` ? K extends '+'|'-' ? K : '' : '';
type Parser2<T> = T extends `${infer K}%` ?  '%' : '';
type Parser3<T> = T extends `${Parser1<T>}${infer K}${Parser2<T>}` ?  K : '';
type PercentageParser<A extends string> = [Parser1<A>, Parser3<A>, Parser2<A>]