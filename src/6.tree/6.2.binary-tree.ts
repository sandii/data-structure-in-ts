/*
 * author: Chenzhi <chenzhibupt@qq.com>
 * date: Sep 15, 2022
 *
 * Binary Tree
 *
 * preOrder:  parent -> lchild -> rchild
 * inOrder:   lchild -> parent -> rchild
 * postOrder: lchild -> rchild -> parent
 *
 */

type ElType = string;

class TreeNode {
  public constructor(public data: ElType = '') {}
  public lchild: TreeNode | null = null;
  public rchild: TreeNode | null = null;
}

class BinaryTree {
  private root: TreeNode | null = null;
  private createIndex = 0;

  public constructor(private pattern = '') {
    this.create('root');
  }

  private create(
    pos: 'lchild' | 'rchild' | 'root',
    parent?: TreeNode,
  ): void {
    const data = this.pattern[this.createIndex];
    this.createIndex++;

    if (!data) return;

    const newNode =
      data === '#' ? null : new TreeNode(data);

    switch(pos) {
      case 'root':
        this.root = newNode;
      case 'lchild':
        (parent as TreeNode).lchild = newNode;
      case 'rchild':
        (parent as TreeNode).rchild = newNode;
    }

    if (!newNode) return;

    this.create('lchild', newNode);
    this.create('rchild', newNode);
  }

  public preOrderTraverse(currentNode = this.root): void {
    if (!currentNode) return;
    console.log(currentNode.data);
    this.preOrderTraverse(currentNode.lchild);
    this.preOrderTraverse(currentNode.rchild);
  }
  public inOrderTraverse(currentNode = this.root): void {
    if (!currentNode) return;
    this.preOrderTraverse(currentNode.lchild);
    console.log(currentNode.data);
    this.preOrderTraverse(currentNode.rchild);
  }
  public postOrderTraverse(currentNode = this.root): void {
    if (!currentNode) return;
    this.preOrderTraverse(currentNode.lchild);
    this.preOrderTraverse(currentNode.rchild);
    console.log(currentNode.data);
  }
}

const biTree = new BinaryTree('ABD##EH##I##CF##G##');
biTree.preOrderTraverse();
biTree.inOrderTraverse();
biTree.postOrderTraverse();
