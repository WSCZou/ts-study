/*
 * @Author: jialiangzou
 * @Date: 2022-09-26 22:17:45
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-26 22:20:09
 * @FilePath: /ts-study/type-challenge/08640-medium-number-range/template.ts
 */
type PlusOne<T extends Number, Res extends 0[] = []> = Res['length'] extends T
  ? [...Res, 0]['length']
  : PlusOne<T, [...Res, 0]>

type NumberRange<L extends number, H extends number, Res = H> = L extends H
  ? Res
  : NumberRange<PlusOne<L>, H, L | Res>

