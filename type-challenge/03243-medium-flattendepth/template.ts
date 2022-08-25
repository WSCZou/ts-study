/*
 * @Author: jialiangzou
 * @Date: 2022-08-25 21:48:27
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-25 21:56:34
 * @FilePath: /ts-study/type-challenge/03243-medium-flattendepth/template.ts
 */
type FlattenOnce<T extends any[], U extends any[] = []> = T extends [infer X, ...infer Y] ? (
    X extends any[] ? FlattenOnce<Y, [...U, ...X]> : FlattenOnce<Y, [...U, X]>
  ) : U
  
  type FlattenDepth<
    T extends any[],
    U extends number = 1,
    P extends any[] = []
  > = P['length'] extends U ? T : (
    FlattenOnce<T> extends T ? T : (
      FlattenDepth<FlattenOnce<T>, U, [...P, any]>
    )
  )