/*
 * @Author: jialiangzou
 * @Date: 2022-09-23 21:27:39
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-23 21:33:13
 * @FilePath: /ts-study/type-challenge/07544-medium-construct-tuple/template.ts
 */
type ConstructTuple<L extends number, T extends unknown[] = []> = T['length'] extends L
  ? T
  : ConstructTuple<L, [unknown, ...T]>
