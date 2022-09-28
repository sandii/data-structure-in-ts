/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 28, 2022
 *
 * AVL Tree
 *
 * AVL Tree, aka Self-balancing Binary Tree
 * It was invented by 2 Soviet Union mathematicians in 1962
 * AVL is short for their names
 *
 */

class TreeNode {
  public constructor(public data = 0) {}
  public lchild: TreeNode | null = null;
  public rchild: TreeNode | null = null;
  public balanceFactor = 0;
}

class AVLTree {
  private root: TreeNode | null = null;

  public insert(data: number): void {
  }

  private rotateR(curr: TreeNode): void {}
  private rotateL(curr: TreeNode): void {}

  private balanceR(curr: TreeNode): void {}
  private balanceL(curr: TreeNode): void {}

  public inOrderTraverse(): void {}

  private doInOrderTraverse(curr: TreeNode | null): void {}

  public getHeight(): number {
    return 0;
  }
}

export default AVLTree;

const tree = new AVLTree();

for (let i = 0; i < 20; i++) {
  const data = Math.floor(Math.random() * 100);
  tree.insert(data);
  console.log(data);
}

tree.inOrderTraverse();
console.log(tree.getHeight());
