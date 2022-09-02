/*
 * @Author: jialiangzou
 * @Date: 2022-09-02 22:26:57
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-02 22:30:16
 * @FilePath: /ts-study/type-challenge/04425-medium-greater-than/template.ts
 */
type GreaterThan<T extends number, U extends number, R extends any[] = []> = 
  T extends R['length']
    ? false
    : U extends R['length']
      ? true
      : GreaterThan<T, U, [...R, 1]>