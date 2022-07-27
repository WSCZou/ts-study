/*
 * @Author: jialiangzou
 * @Date: 2022-07-27 21:51:58
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-27 22:06:24
 * @FilePath: /ts-study/type-challenge/00645-medium-diff/template.ts
 */
type Diff<T, K> = {
    [key in Exclude<keyof (T & K),keyof (T | K)>] : key extends keyof T
        ? T[key]
        : key extends keyof K
            ? K[key]
            : never
}