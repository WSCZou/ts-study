/*
 * @Author: jialiangzou
 * @Date: 2022-07-29 22:26:04
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-29 22:46:27
 * @FilePath: /ts-study/type-challenge/01042-medium-isnever/template.ts
 */
// refs:https://juejin.cn/post/7002494139153530917
type IsNever<T> = [T] extends [never] ? true : false