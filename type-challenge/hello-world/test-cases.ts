/*
 * @Author: jialiangzou
 * @Date: 2022-05-20 17:22:49
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-06-06 22:50:51
 * @FilePath: /ts-study/type-challenge/hello-world/test-cases.ts
 */

import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
    Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld,string>>,
]

