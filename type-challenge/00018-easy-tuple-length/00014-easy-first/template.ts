/*
 * @Author: jialiangzou
 * @Date: 2022-06-09 22:33:21
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-09 22:38:00
 * @FilePath: /ts-study/type-challenge/00018-easy-tuple-length/00014-easy-first/template.ts
 */
type Length<T extends readonly any[]> = T['length'];


// js实现
function myLength(array){
    return array.length ? array.length : 'error'
}

// 知识点
// 什么是 tuble 类型
// tuble 与数组有什么区别