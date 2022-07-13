/*
 * @Author: jialiangzou
 * @Date: 2022-07-13 21:22:04
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-13 22:00:19
 * @FilePath: /ts-study/type-challenge/00191-medium-append-argument/template.ts
 */
type AppendArgument<Fn extends Function, A> = Fn extends ((...args: infer T) => infer K)
    ? (...args: [...T,A]) => K
    : never
