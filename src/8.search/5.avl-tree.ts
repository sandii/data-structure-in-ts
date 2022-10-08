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

enum BalanceFactor {
  LEFT_TALLER = 1,
  EQUAL_TALLER = 0,
  RIGHT_TALLER = -1,
}

class TreeNode {
  public constructor(public data = 0) {}
  public lchild: TreeNode | null = null;
  public rchild: TreeNode | null = null;
}

class AVLTree {
  private root: TreeNode | null = null;
  private taller = false;

  public insert(data: number): void {
    this.root = this.doInsert(this.root, data);
  }

  private doInsert(
    node: TreeNode | null,
    data: number,
  ): TreeNode {
    const newNode = new TreeNode(data);

    if (!node) {
      this.taller = true;
      return newNode;
    }

    if (data === node.data) {
      this.taller = false;
      return node;
    }

    const bf = this.getBalanceFactor(node);

    if (data < node.data) {
      node.lchild = this.doInsert(node.lchild, data);
      if (!this.taller) return node;

      switch (bf) {
        case BalanceFactor.LEFT_TALLER:
          this.taller = false;
          return this.balanceL(node);
        case BalanceFactor.EQUAL_TALLER:
          this.taller = true;
          return node;
        case BalanceFactor.RIGHT_TALLER:
          this.taller = false;
          return node;
      }
    }

    if (data > node.data) {
      node.rchild = this.doInsert(node.rchild, data);
      if (!this.taller) return node;

      switch (bf) {
        case BalanceFactor.RIGHT_TALLER:
          this.taller = false;
          return this.balanceR(node);
        case BalanceFactor.EQUAL_TALLER:
          this.taller = true;
          return node;
        case BalanceFactor.LEFT_TALLER:
          this.taller = false;
          return node;
      }
    }

    return node;
  }

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

  private balanceR(node: TreeNode): TreeNode {
    const bf = this.getBalanceFactor(node.rchild);
    if (bf === BalanceFactor.RIGHT_TALLER) {
      return this.rotateL(node);
    } else {
      node.rchild = this.rotateR(node.rchild!);
      return this.rotateL(node);
    }
  }

  private balanceL(node: TreeNode): TreeNode {
    const bf = this.getBalanceFactor(node.lchild);
    if (bf === BalanceFactor.LEFT_TALLER) {
      return this.rotateR(node);
    } else {
      node.lchild = this.rotateL(node.lchild!);
      return this.rotateR(node);
    }
  }

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

  // Balance Factor
  // bf === 0: left & right child have same height
  // bf > 0: left is taller
  // bf < 0: right is taller
  private getBalanceFactor(node: TreeNode | null): number {
    if (!node) return BalanceFactor.EQUAL_TALLER;
    const bf =
      this.getBalanceFactor(node.lchild) -
      this.getBalanceFactor(node.rchild);

    if (bf === 0) return BalanceFactor.EQUAL_TALLER;

    if (bf > 0) {
      return BalanceFactor.LEFT_TALLER;
    } else {
      return BalanceFactor.RIGHT_TALLER;
    }
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
