/*
 * @Author: jialiangzou
 * @Date: 2022-06-15 21:52:22
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-15 21:55:48
 * @FilePath: /ts-study/type-challenge/00533-easy-concat/template.ts
 */
type Concat<T extends unknown[], U extends unknown[]> = [...T,...U]

