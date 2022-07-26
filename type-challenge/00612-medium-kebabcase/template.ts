/*
 * @Author: jialiangzou
 * @Date: 2022-07-26 21:36:26
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-26 21:48:51
 * @FilePath: /ts-study/type-challenge/00612-medium-kebabcase/template.ts
 */
type KebabCase<S> = S extends `${infer T}${infer K}` 
                    ? K extends Uncapitalize<K>
                        ? `${Lowercase<T>}${KebabCase<K>}`
                        : `${Lowercase<T>}-${KebabCase<K>}`
                    : S;