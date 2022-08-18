/*
 * @Author: jialiangzou
 * @Date: 2022-08-18 21:32:42
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-18 21:36:34
 * @FilePath: /ts-study/type-challenge/02946-medium-objectentries/template.ts
 */

type ObjectEntries<T, U = Required<T>, K extends keyof U = keyof U> = 
K extends any 
   ?  [K, U[K] extends never ? undefined : U[K]]
   :  never
