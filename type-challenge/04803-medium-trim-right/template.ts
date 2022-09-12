/*
 * @Author: jialiangzou
 * @Date: 2022-09-09 22:23:02
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-12 21:00:01
 * @FilePath: /ts-study/type-challenge/04803-medium-trim-right/template.ts
 */
type Empty = " " | "\n" | "\t";
type TrimRight<S extends string> = S extends `${infer F}${Empty}`
  ? TrimRight<F>
  : S;