/*
 * @Author: jialiangzou
 * @Date: 2022-06-29 22:12:01
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-29 22:40:46
 * @FilePath: /ts-study/type-challenge/00012-medium-chainable-options/template.ts
 */
type Chainable<Options extends object = {}> = {
    option<K extends string,V>(key: K extends keyof Options ? never : K, value: V): Chainable<Options & { [S in K]: V }>
    get(): { [K in keyof Options]: Options[K] }
  }
  