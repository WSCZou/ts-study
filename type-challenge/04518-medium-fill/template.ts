/*
 * @Author: jialiangzou
 * @Date: 2022-09-08 22:20:35
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-08 22:28:22
 * @FilePath: /ts-study/type-challenge/04518-medium-fill/template.ts
 */
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  I extends any[] = [],
  Flag extends boolean = I['length'] extends Start ? true : false
> = I['length'] extends End
    ? T
    : T extends [infer F, ...infer R]
      ? Flag extends false
        ? [F, ...Fill<R, N, Start, End, [...I, 0]>]
        : [N, ...Fill<R, N, Start, End, [...I, 0], Flag>]
      : T
