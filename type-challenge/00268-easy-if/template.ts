/*
 * @Author: jialiangzou
 * @Date: 2022-06-14 22:01:04
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-14 22:03:19
 * @FilePath: /ts-study/type-challenge/00268-easy-if/template.ts
 */
type If<C extends boolean, T, F> = C extends true ? T : F;
