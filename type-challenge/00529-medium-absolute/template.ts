/*
 * @Author: jialiangzou
 * @Date: 2022-07-20 21:16:20
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-20 21:28:46
 * @FilePath: /ts-study/type-challenge/00529-medium-absolute/template.ts
 */
type Absolute<T extends number | string | bigint> = 
    `${T}` extends `-${infer N}`
    ? `${N}`
    : `${T}`