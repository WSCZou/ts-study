/*
 * @Author: jialiangzou
 * @Date: 2022-06-28 21:02:59
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-28 21:23:48
 * @FilePath: /ts-study/type-challenge/00010-medium-tuple-to-union/template.ts
 */
type TupleToUnion<T extends unknown[]> = T[number]
