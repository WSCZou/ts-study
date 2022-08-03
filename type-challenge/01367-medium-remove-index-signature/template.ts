/*
 * @Author: jialiangzou
 * @Date: 2022-08-03 22:17:01
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-03 22:58:43
 * @FilePath: /ts-study/type-challenge/01367-medium-remove-index-signature/template.ts
 */
type RemoveIndexSignature<T> ={[K in keyof T as (string extends K ? never : number extends K ? never : symbol extends K ? never : K)] : T[K]}
