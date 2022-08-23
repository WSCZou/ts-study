/*
 * @Author: jialiangzou
 * @Date: 2022-08-22 22:13:46
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-22 22:17:40
 * @FilePath: /ts-study/type-challenge/03188-medium-tuple-to-nested-object/template.ts
 */

type TupleToNestedObject<T extends Array<unknown>, U, R = U> = T extends [...infer Rest, infer L] ? TupleToNestedObject<Rest, U, Record<L & string, R>> : R;
