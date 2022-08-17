/*
 * @Author: jialiangzou
 * @Date: 2022-08-17 22:10:23
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-17 22:15:47
 * @FilePath: /ts-study/type-challenge/02852-medium-omitbytype/template.ts
 */
type OmitByType<T, U> = {
    [K in keyof T as T[K] extends U ? never : K] : T[K]
}

