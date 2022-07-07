/*
 * @Author: jialiangzou
 * @Date: 2022-07-07 21:55:01
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-07 21:59:35
 * @FilePath: /ts-study/type-challenge/00108-medium-trim/template.ts
 */
type empty = ' ' | '\n' | '\r' | '\t';
type Trim<S extends string> = S extends `${empty}${infer T}` | `${infer T}${empty}` ? Trim<T> : S;
