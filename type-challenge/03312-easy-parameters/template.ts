/*
 * @Author: jialiangzou
 * @Date: 2022-06-20 22:36:39
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-21 22:22:42
 * @FilePath: /ts-study/type-challenge/03312-easy-parameters/template.ts
 */
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P :never
