/*
 * @Author: jialiangzou
 * @Date: 2022-06-08 22:39:30
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-08 22:58:43
 * @FilePath: /ts-study/type-challenge/00014-easy-first/template.ts
 */
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0];
// type First<T extends any[]> = T extends [] ? ne ver : T[0];
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
type First<T extends any[]> = T extends [infer First, ... infer Rest] ? First : never;

// js实现
function first(array){
    const first = array[0];
    return first ? first : 'never';
    
}

// 知识点
// extends 类型条件判断
// 获取 tuble 的 length 属性
// extends unio 判断
// inter 类型推断