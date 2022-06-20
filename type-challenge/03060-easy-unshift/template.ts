/*
 * @Author: jialiangzou
 * @Date: 2022-06-20 22:36:39
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-20 22:36:57
 * @FilePath: /ts-study/type-challenge/03060-easy-unshift/template.ts
 */
type Unshift<T extends unknown[], U> = [U,...T]
