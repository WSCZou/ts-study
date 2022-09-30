/*
 * @Author: jialiangzou
 * @Date: 2022-09-30 14:36:08
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-09-30 15:50:10
 * @FilePath: /ts-study/type-challenge/00006-hard-simple-vue/template.ts
 */
type GetValuedType<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? ReturnType<T[K]> : never;
}

declare function SimpleVue<D, C, M>(options: {
  data: (this: void) => D,
  computed: C & ThisType<D>,
  methods: M & ThisType<D & M & GetValuedType<C>>
}): any