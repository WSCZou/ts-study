/*
 * @Author: jialiangzou
 * @Date: 2022-06-13 22:20:02
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-13 22:26:47
 * @FilePath: /ts-study/type-challenge/00189-easy-awaited/template.ts
 */
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> 
    ? X extends Promise<unknown>
        ? MyAwaited<X> 
        : X
    : 
    T;
