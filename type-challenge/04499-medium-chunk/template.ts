/*
 * @Author: jialiangzou
 * @Date: 2022-09-06 19:37:45
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-07 20:01:13
 * @FilePath: /ts-study/type-challenge/04499-medium-chunk/template.ts
 */

type Chunk<
  T,
  D extends number,
  A extends any[] = [],
  TL extends any[] = []
> = T extends [infer F, ...infer R]
  ? A["length"] extends D
    ? Chunk<R, D, [F], [...TL, [...A]]>
    : Chunk<R, D, [...A, F], TL>
  : A extends []
    ? [...TL]
    : [...TL, A];


type aa = Chunk<[1, 2, 3, 4], 2>

// T = [1, 2, 3, 4]
// D = 2
// A = []
// TL = []
// F = 1
// R = [2,3,4]
// Chunk<[2,3,4], 2, [1], []> //Chunk<R, D, [...A, F], TL>

// T = [2,3,4]
// D = 2
// A = [1]
// TL = []
// F = 2
// R = [3,4]
// Chunk<[3,4], 2, [1,2], []> //Chunk<R, D, [...A, F], TL>

// T = [3,4]
// D = 2
// A = [1,2]
// TL = []
// F = 3
// R = [4]
// Chunk<[4], 2, [3], [[1,2]]> //Chunk<R, D, [F], [...TL, [...A]]>

// T = [4]
// D = 2
// A = [3]
// TL = [[1,2]]
// F = 4
// R = []
// Chunk<[], 2, [3,4], [[1,2]]> //Chunk<R, D, [...A, F], TL>

// T = []
// D = 2
// A = [3,4]
// TL = [[1,2]]
// [[1,2],[3,4]] //[...TL]