/*
 * @Author: jialiangzou
 * @Date: 2022-08-24 21:17:01
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-24 22:07:27
 * @FilePath: /ts-study/type-challenge/03196-medium-flip-arguments/template.ts
 */

// your answers
type FlipArguments<T extends Function> = T extends (...args: infer A) => infer ReturnType ? (...args: Reverse<A>) => ReturnType : never
