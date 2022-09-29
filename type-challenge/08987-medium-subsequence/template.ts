/*
 * @Author: jialiangzou
 * @Date: 2022-09-29 21:31:51
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-29 21:32:30
 * @FilePath: /ts-study/type-challenge/08987-medium-subsequence/template.ts
 */
type Subsequence<T extends any[]> = T extends [infer Head, ...infer Tail]
  ? [...([Head] | []), ...Subsequence<Tail>]
  : []