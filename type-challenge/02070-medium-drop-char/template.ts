/*
 * @Author: jialiangzou
 * @Date: 2022-08-05 21:25:20
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-05 22:14:36
 * @FilePath: /ts-study/type-challenge/02070-medium-drop-char/template.ts
 */

type DropChar<S, C extends string> = S extends `${infer L}${C}${infer R}`
                        ?
                        DropChar<`${L}${R}`,C>
                        :
                        S