/*
 * @Author: jialiangzou
 * @Date: 2022-05-20 17:30:19
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-06 22:54:49
 * @FilePath: /ts-study/type-challenge/00004-easy-pick/template.ts
 */
type MyPick<T, K extends keyof T> = {
    [P in K] : T[P]
}


//使用js实现
function MyPick(todo,keys) {
    const obj = {};

    keys.forEach(key => {
        if(key in todo){
            obj[key] = todo[key];
        }
    });

    return obj;
}


// 涉及知识点
// 遍历 mapped
// 取值 indexed
// 判断 key 是否在 todo 里面: keyof lookup