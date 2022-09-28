/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 27, 2022
 *
 * Binary Sort Tree
 *
 * If lchild and rchild both exit,
 * Find rightest (max) offspring of lchild to replace removed node
 * Because rightest offspring of lchild is still smaller than rchild
 *
 */

class TreeNode {
  public constructor(public data = 0) {}
  public lchild: TreeNode | null = null;
  public rchild: TreeNode | null = null;
}

class BinarySortTree {
  private root: TreeNode | null = null;

  public search(data: number): boolean {
    return this.doSearch(this.root, data);
  }

  private doSearch(
    curr: TreeNode | null,
    data: number,
  ): boolean {
    if (!curr) return false;

    if (data < curr.data) {
      return this.doSearch(curr.lchild, data);
    } else {
      return this.doSearch(curr.rchild, data);
    }
  }

  public insert(data: number): void {
    const newNode = new TreeNode(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this.doInsert(this.root, newNode);
  }

  private doInsert(parent: TreeNode, newNode: TreeNode) {
    if (newNode.data === parent.data) return;

    if (newNode.data < parent.data) {
      if (!parent.lchild) {
        parent.lchild = newNode;
      } else {
        this.doInsert(parent.lchild, newNode);
      }
    } else {
      if (!parent.rchild) {
        parent.rchild = newNode;
      } else {
        this.doInsert(parent.rchild, newNode);
      }
    }
  }

  public remove(data: number): void {
    this.root = this.doRemove(this.root, data);
  }

  private doRemove(
    curr: TreeNode | null,
    data: number,
  ): TreeNode | null {
    if (!curr) return null;

    if (data < curr.data) {
      curr.lchild = this.doRemove(curr.lchild, data);
      return curr;
    }
    if (data > curr.data) {
      curr.rchild = this.doRemove(curr.rchild, data);
      return curr;
    }
    // delete current node
    // current node has no child
    if (!curr.lchild && !curr.rchild) {
      return null;
    }
    // current node has lchild
    if (curr.lchild && !curr.rchild) {
      return curr.lchild;
    }
    // current node has rchild
    if (!curr.lchild && curr.rchild) {
      return curr.rchild;
    }

    // current node has both children
    // replace current node with lchild's rightest offspring
    const leftMaxNode = this.getMaxNode(curr.lchild!);
    curr.data = leftMaxNode.data;
    curr.lchild = this.doRemove(curr.lchild, leftMaxNode.data);
    return curr;
  }

  public getMaxNode(curr: TreeNode): TreeNode {
    
  }

  public inOrdertraverse(): void {
    this.doInOrderTraverse(this.root);
  }

  private doInOrderTraverse(curr: TreeNode | null): void {
    if (!curr) return;
    this.doInOrderTraverse(curr.lchild);
    console.log(curr.data);
    this.doInOrderTraverse(curr.rchild);
  }
}

export default BinarySortTree;

const tree = new BinarySortTree();

// for (let i = 0; i < 20; i++) {
//   const el = Math.floor(Math.random() * 100);
//   console.log(el);
//   tree.insert(el);
// }

// console.log('\nSorted...\n');

// tree.traverse();

// console.log('\nRemoved all muliples of 5...\n');

// for (let i = 0; i < 20; i++) {
//   const el = (i + 1) * 5;
//   tree.remove(el);
// }

// tree.traverse();
