/*
 * @Author: jialiangzou
 * @Date: 2022-09-14 21:59:49
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-15 22:11:59
 * @FilePath: /ts-study/type-challenge/05140-medium-trunc/test-cases.ts
 */
type Trunc<T extends string | number> = `${T}` extends `${infer F}.${infer L}` ? F : `${T}`;
