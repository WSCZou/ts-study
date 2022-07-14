/*
 * @Author: jialiangzou
 * @Date: 2022-07-14 22:01:13
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-14 22:18:16
 * @FilePath: /ts-study/type-challenge/00296-medium-permutation/template.ts
 */
type Permutation<T,U = T> = [U] extends [never] ? [] : U extends T ? [U,...Permutation<Exclude<T,U>>] : []