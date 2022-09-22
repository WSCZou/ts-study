/*
 * @Author: jialiangzou
 * @Date: 2022-09-22 21:58:19
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-22 22:00:23
 * @FilePath: /ts-study/type-challenge/05821-medium-maptypes/template.ts
 */

type PickMapTo<Map, MapFrom> = Map extends { mapFrom: infer From, mapTo: infer To }
  ? From extends MapFrom 
    ? To 
    : never
  : never

type MapTypes<T, R extends { mapFrom: unknown, mapTo: unknown }> = {
  [K in keyof T]: PickMapTo<R, T[K]> extends never ? T[K]: PickMapTo<R, T[K]>
}
