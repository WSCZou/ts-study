/*
 * @Author: jialiangzou
 * @Date: 2022-06-07 22:16:09
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-07 22:24:13
 * @FilePath: /ts-study/type-challenge/00007-easy-readonly/template.ts
 */
type MyReadonly<T> = {
    readonly [P in keyof T] : T[P];
}

// 使用js实现
function myReadonly(obj){
    const result = {};
    
    for(const key in obj){
        result['readonly' + key] = obj[key]
    }

    return result;
}

// 知识点
// 遍历接口: in -> mapped keyof -> lookup
// readonly 关键字
// 通过 key 来获取接口里面的值 indexed
