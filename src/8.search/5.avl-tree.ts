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

  public insert(data: number): void {}

  private rotateR(oldTop: TreeNode): TreeNode {
    const newTop = oldTop.lchild!;
    oldTop.lchild = newTop.rchild;
    newTop.rchild = oldTop;
    return newTop;
  }
  private rotateL(oldTop: TreeNode): TreeNode {
    const newTop = oldTop.rchild!;
    oldTop.rchild = newTop.lchild;
    newTop.lchild = oldTop;
    return newTop;
  }
  private balanceR(node: TreeNode): void {}
  private balanceL(node: TreeNode): void {}

  public inOrderTraverse(): void {
    this.doInOrderTraverse(this.root);
  }

  private doInOrderTraverse(node: TreeNode | null): void {
    if (!node) return;
    this.doInOrderTraverse(node.lchild);
    console.log(node.data);
    this.doInOrderTraverse(node.rchild);
  }

  public getHeight(): number {
    return this.doGetHeight(this.root);
  }

  private doGetHeight(node: TreeNode | null): number {
    if (!node) return 0;
    return (
      Math.max(
        this.doGetHeight(node.lchild),
        this.doGetHeight(node.rchild),
      ) + 1
    );
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
