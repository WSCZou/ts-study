/*
 * @Author: jialiangzou
 * @Date: 2022-09-06 19:37:45
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-06 19:38:20
 * @FilePath: /ts-study/type-challenge/04484-medium-istuple/template.ts
 */
type IsTuple<T> = [T] extends [never] ?
  false :
  T extends readonly [...infer Head, infer Last] | [] ?
  true :
  false