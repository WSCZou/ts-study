/*
 * @Author: jialiangzou
 * @Date: 2022-07-18 22:17:36
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-18 23:24:57
 * @FilePath: /ts-study/type-challenge/00459-medium-flatten/template.ts
 */
type Flatten<T> = T extends unknown[]
    ? T extends [infer First,...infer Rest]
        ? [...Flatten<First>,...Flatten<Rest>]
        : []
    : [T]


// 为什么不能把 T extends unknown[] 放范型 因为 First 不能保证是个数组 而 ...Flatten<Rest> 肯定是个数组



