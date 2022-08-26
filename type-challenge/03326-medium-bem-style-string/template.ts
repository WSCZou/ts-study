/*
 * @Author: jialiangzou
 * @Date: 2022-08-26 21:18:04
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-26 21:24:35
 * @FilePath: /ts-study/type-challenge/03326-medium-bem-style-string/template.ts
 */
type ArrToStr<S extends string, T extends string[] = []> = T extends [] ? '' : `${S}${T[number]}`;

type BEM<
  B extends string,
  E extends string[] = [],
  M extends string[] = []
> = `${B}${ArrToStr<"__", E>}${ArrToStr<"--", M>}`;
