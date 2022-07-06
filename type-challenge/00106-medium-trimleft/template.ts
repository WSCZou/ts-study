/*
 * @Author: jialiangzou
 * @Date: 2022-07-06 21:17:35
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-07-06 22:33:26
 * @FilePath: /ts-study/type-challenge/00106-medium-trimleft/template.ts
 */
type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\r' | '\t'}${infer P}` ? TrimLeft<P> : S;

// refs:
// 1. https://juejin.cn/post/6867538991073296392
// 2. https://juejin.cn/post/6867785919693832200