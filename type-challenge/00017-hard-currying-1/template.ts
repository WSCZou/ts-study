/*
 * @Author: jialiangzou
 * @Date: 2022-10-08 22:13:59
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-10-08 22:18:14
 * @FilePath: /ts-study/type-challenge/00017-hard-currying-1/template.ts
 */


type Currify<T, Initial extends boolean = true> = T extends (
  ...arg: infer Args
) => infer R
  ? Args['length'] extends 0
    ? Initial extends true
      ? T
      : R
    : Args extends [infer F, ...infer Rest]
    ? (p: F) => Currify<(...args: Rest) => R, false>
    : never
  : T;
declare function Currying<T>(fn: T): Currify<T>;