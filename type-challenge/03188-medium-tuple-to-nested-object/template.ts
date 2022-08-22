/*
 * @Author: jialiangzou
 * @Date: 2022-08-22 22:13:46
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-22 22:16:00
 * @FilePath: /ts-study/type-challenge/03188-medium-tuple-to-nested-object/template.ts
 */
type TupleToNestedObject<T, U> = T extends [] ? U : T extends [infer F extends string, ...infer R] ? Record<F, TupleToNestedObject<[...R], U>>: never
