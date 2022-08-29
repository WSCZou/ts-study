/*
 * @Author: jialiangzou
 * @Date: 2022-08-29 12:51:44
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-08-29 12:59:53
 * @FilePath: /ts-study/type-challenge/03376-medium-inordertraversal/template.ts
 */
interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
type InorderTraversal<T extends TreeNode | null> = 
  [T] extends [TreeNode] 
    ? (
      [
        ...InorderTraversal<T['left']>,
        T['val'],
        ...InorderTraversal<T['right']>
      ]
    )
    :
    []
