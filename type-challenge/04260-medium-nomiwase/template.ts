/*
 * @Author: jialiangzou
 * @Date: 2022-09-01 17:53:12
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-01 18:57:23
 * @FilePath: /ts-study/type-challenge/04260-medium-nomiwase/template.ts
 */

// refs = https://juejin.cn/post/7127308027232780302
type StrToUnion<S extends string> = S extends `${infer L}${infer R}` ? L | StrToUnion<R> : S

type AllCombinations<S extends string, U extends string = StrToUnion<S>> =
  [U] extends [never]
  ? ''
  : '' | {
    [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}`
  }[U]



// type a = String2Union<'AB'>
// type c = `${a}`
// type d = Exclude<a, a>
// type e = AllCombinations<'AB'>

// type f = d extends String2Union<'AB'> ? 'a' : 'b'

// // S = 'AB'
// // U = "" | "A" | "B"
// // T = "" | "A" | "B"

// // `${U}` | `${U}${AllCombinations<S, Exclude<T, U>>}`
// // "" | "A" | "B" | AllCombinations<'AB', never>
// type g = AllCombinations<'AB', never> 