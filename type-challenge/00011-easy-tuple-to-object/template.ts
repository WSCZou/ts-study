/*
 * @Author: jialiangzou
 * @Date: 2022-06-07 22:24:46
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-07 22:36:05
 * @FilePath: /ts-study/type-challenge/00011-easy-tuple-to-object/template.ts
 */
type TupleToObject<T extends readonly (string|number|symbol)[]> = {
    [P in T[number] ] : P
}


// 使用js实现
function tupleToObject(array) {
    const obj = {};

    array.forEach((val) => {
        obj[val] = val
    });
    
    return obj;
}

// 知识点
// 遍历 array
