/*
 * @Author: jialiangzou
 * @Date: 2022-08-03 22:17:01
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-03 22:59:56
 * @FilePath: /ts-study/type-challenge/01367-medium-remove-index-signature/template.ts
 */
// refs:
// https://segmentfault.com/q/1010000041790130
// https://ts.yayujs.com/handbook/ObjectTypes.html#%E7%B4%A2%E5%BC%95%E7%AD%BE%E5%90%8D-index-signatures
type RemoveIndexSignature<T> ={[K in keyof T as (string extends K ? never : number extends K ? never : symbol extends K ? never : K)] : T[K]}
