/*
 * @Author: jialiangzou
 * @Date: 2022-08-31 12:43:08
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-31 13:08:52
 * @FilePath: /ts-study/type-challenge/04182-medium-fibonacci-sequence/template.ts
 */


type Fibonacci<
  T extends number,
  N extends number[] = [1],
  Res extends number[] = [1],
  Cur extends number[] = [1]
> = N['length'] extends T
    ? Res['length']
    : Fibonacci<T,[...N,1],Cur,[...Res,...Cur]>
