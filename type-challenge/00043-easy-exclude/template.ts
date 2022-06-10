/*
 * @Author: jialiangzou
 * @Date: 2022-06-10 23:00:47
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-10 23:10:38
 * @FilePath: /ts-study/type-challenge/00043-easy-exclude/template.ts
 */
type MyExclude<T, U> = T extends U ? never : T;

// js实现
function myExclude(T,U){
    const result = [];

    for(let i = 0; i < T.length; i++){
        const t = T[i];
        if(!U.includes(t)){
            result.push(t)
        }
    }

    return result;
}