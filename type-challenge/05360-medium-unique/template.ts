/*
 * @Author: jialiangzou
 * @Date: 2022-09-21 21:21:45
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-21 21:30:39
 * @FilePath: /ts-study/type-challenge/05360-medium-unique/template.ts
 */
type MyEqual<T, U> =
  (<G>() => G extends T ? 1 : 2) extends
  (<G>() => G extends U ? 1 : 2) ? true : false
  
type Includes<T extends unknown [], U> = T extends [infer First, ...infer Rest]
  ? MyEqual<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false

type Unique<T extends unknown [], R extends unknown[] = []> = T extends [infer First, ...infer Rest]
  ? Includes<R, First> extends true
    ? Unique<Rest, R>
    : Unique<Rest, [...R, First]>
  : R