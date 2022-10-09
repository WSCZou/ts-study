/*
 * @Author: jialiangzou
 * @Date: 2022-10-09 17:46:37
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-10-09 17:48:18
 * @FilePath: /ts-study/type-challenge/00055-hard-union-to-intersection/template.ts
 */

// your answers
type ToFunc<T> = T extends any
  ? (arg: T) => void
  : never

type UnionToIntersection<U> = ToFunc<U> extends (args: infer Arg) => void
                                            ? Arg
                                            : never;
