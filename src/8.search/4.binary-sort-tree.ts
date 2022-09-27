/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 27, 2022
 *
 * Binary Sort Tree
 *
 * If lchild and rchild both exit,
 * Find rightest (biggest) offspring of lchild to replace *tp
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

  private parent: TreeNode | null = null;

  public search(el: number): boolean {
    this.parent = null; // init
    return this.doSearch(el, this.root);
  }

  private doSearch(
    el: number,
    curr: TreeNode | null,
  ): boolean {
    if (!curr) return false;
    if (el === curr.data) return true;

    this.parent = curr;
    if (el < curr.data) {
      return this.doSearch(el, curr.lchild);
    } else {
      return this.doSearch(el, curr.rchild);
    }
  }

  public insert(el: number): void {
    if (!this.root) {
      this.root = new TreeNode(el);
      return;
    }

    const isExist = this.search(el);
    if (isExist) return;

    const newNode = new TreeNode(el);
    if (el < this.parent?.data!) {
      this.parent!.lchild = newNode;
    } else {
      this.parent!.rchild = newNode;
    }
  }

  public remove(el: number): void {}

  public traverse(): void {
    this.doTraverse(this.root);
  }

  private doTraverse(curr: TreeNode | null): void {
    if (!curr) return;
    this.doTraverse(curr.lchild);
    console.log(curr.data);
    this.doTraverse(curr.rchild);
  }
}

export default BinarySortTree;

const tree = new BinarySortTree();

for (let i = 0; i < 20; i++) {
  const el = Math.floor(Math.random() * 100);
  console.log(el);
  tree.insert(el);
}

console.log('\nSorted...\n');

tree.traverse();

// console.log('\nRemoved all muliples of 5...\n');

// for (let i = 0; i < 20; i++) {
//   const el = (i + 1) * 5;
//   tree.remove(el);
// }

// tree.traverse();
