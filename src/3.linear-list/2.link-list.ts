/*
 * Author: Chen Zhi <chenzhibupt@qq.com>
 * Date: Sep 3, 2022
 *
 * Link List
 * - index from 1
 *
 *
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
  public head: Pointer = null;

  public insert(el: ElType, index = 1): Status {
    if (index < 1) return Status.FAIL;

    if (index === 1) {
      this.insertAtHead(el);
      return Status.SUCCESS;
    }

    let previous = this.head as LinkListNode;
    for (let j = 1; j < index; j++) {
      if (previous.next === null) break; // index too large, insert at tail
      previous = previous.next;
    }
    previous.next = new LinkListNode(el);

    return Status.SUCCESS;
  }

  // public insertAtHead(el: ElType): void {}
  // public insertAtTail(el: ElType): void {}
  // public remove(index: number): void {}
  // public getElem(index: number): ElType {}
  // public locateElem(el: ElType): number {}
  // public getLength(): number {}
  // public clear() {}
  // public traverse() {}
}
