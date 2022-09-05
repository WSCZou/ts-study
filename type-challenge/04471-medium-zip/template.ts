/*
 * @Author: jialiangzou
 * @Date: 2022-09-05 16:26:37
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-05 17:56:24
 * @FilePath: /ts-study/type-challenge/04471-medium-zip/template.ts
 */
type Zip<
    A extends readonly any[],
    B extends readonly any[],
    C extends readonly any[]=[]> =
    A extends [infer R,...infer U]
    ? B extends [infer S,...infer T]
      ? Zip<U,T,[...C,[R,S]]>
      : C
    : C ;

