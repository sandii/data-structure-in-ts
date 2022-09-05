/*
 * Author: Chen Zhi <chenzhibupt@qq.com>
 * Date: Sep 3, 2022
 *
 * Link List
 * - Index from 1
 * - Head is a empty node, its next points to first node
 * - Empty node can ensure operation consistency
 * - Then there is no need to tell the current node is head or not
 *
 * - [ADVANTAGE] With pointer, there is no need to move a lot of data while insertion or deletion 
 */

import { ElType, Status } from '../type';

type Pointer = LinkListNode | null;

class LinkListNode {
  public constructor(
    public data: ElType,
    public next: Pointer = null,
  ) {}
}

class LinkList {
  public head = new LinkListNode(0);

  private doInsert(
    el: ElType,
    previous: LinkListNode,
  ): void {
    const current = new LinkListNode(el);
    current.next = previous.next;
    previous.next = current;
  }

  public insert(el: ElType, index = 1): Status {
    if (index < 1) return Status.FAIL;

    let previous = this.head;
    for (let j = 1; j < index; j++) {
      if (previous.next === null) break; // index too large, insert at tail
      previous = previous.next;
    }

    this.doInsert(el, previous);
    return Status.SUCCESS;
  }

  public insertAtHead(el: ElType): void {
    this.doInsert(el, this.head);
  }

  public insertAtTail(el: ElType): void {
    let previous = this.head;
    while (previous.next) {
      previous = previous.next;
    }
    this.doInsert(el, previous);
  }

  public remove(index: number): Status {
    if (index < 1) return Status.FAIL;

    let previous = this.head;
    let current = previous.next;

    for (let j = 1; j < index; j++) {
      if (!current) return Status.FAIL;
      previous = current;
      current = current.next;
    }

    if (!current) return Status.FAIL;

    previous.next = current.next;
    return Status.SUCCESS;
  }

  public getElem(index: number): ElType {
    let current = this.head.next;
    if (!current) return 0;

    if (index < 1) return current.data;

    for (let j = 1; j < index; j++) {
      if (!current) break;
      current = current.next;
    }

    return current?.data || 0;
  }

  public locateElem(el: ElType): number {
    let current = this.head.next;
    let i = 1;
    while (current) {
      if (current.data === el) {
        return i;
      }
      current = current.next;
      i++;
    }
    return -1;
  }

  public getLength(): number {
    let current = this.head.next;
    let length = 0;
    while (current) {
      current = current.next;
      length++;
    }
    return length;
  }

  public clear(): void {
    this.head.next = null;
  }

  public traverse(): void {
    let current = this.head.next;
    const arr = [];
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr);
  }
}

const linkList = new LinkList();

for (let i = 0; i < 5; i++) {
  linkList.insertAtTail(i);
}
linkList.traverse(); // 0 1 2 3 4
linkList.clear();

for (let i = 0; i < 5; i++) {
  linkList.insertAtHead(i * 2);
}
linkList.traverse(); // 8 6 4 2 0

linkList.insert(100, 3);
linkList.traverse(); // 8 6 100 4 2 0

linkList.remove(4);
linkList.remove(2);
linkList.traverse(); // 8 100 2 0

console.log(linkList.getElem(3)); // 2
console.log(linkList.locateElem(3)); // -1
console.log(linkList.locateElem(2)); // 3
console.log(linkList.getLength()); // 4

