/*
 * author: Chenzhi <chenzhibupt@qq.com>
 * date: Sep 8, 2022
 *
 * Link Queue
 * - Link Queue needs 2 flags:
 *  1. HEAD points empty leading cell
 *  2. TAIL points tail cell
 *
 * - There is no LENGTH needed
 * - Because when link queue is empty, HEAD and TAIL will both point to empty leading node
 * - And technically, link queue has no length limit
 */

import { ElType } from '../type';

class StackNode {
  public next: StackNode | null = null;

  public constructor(public data: ElType = 0) {}
}

class LinkQueue {
  public head = new StackNode(0);
  public tail = this.head;

  public clear(): void {
    this.head.next = null;
    this.tail = this.head;
  }

  public enQueue(el: ElType): void {
    const newNode = new StackNode(el);
    this.tail.next = newNode;
    this.tail = newNode;
  }

  public deQueue(): ElType {
    const curr = this.head.next;
    if (!curr) return 0;

    this.head.next = curr.next;

    // dequeue last node, reset TAIL
    if (curr === this.tail) {
      this.tail = this.head;
    }

    return curr.data;
  }

  public getHead(): ElType {
    return this.head.next?.data || 0;
  }
}

const stack = new LinkQueue();

for (let i = 0; i < 5; i++) {
  stack.enQueue(i);
}

console.log(stack.deQueue()); // 0
console.log(stack.deQueue()); // 1
console.log(stack.deQueue()); // 2
console.log(stack.deQueue()); // 3
console.log(stack.deQueue()); // 4
console.log(stack.deQueue()); // 0
console.log(stack.deQueue()); // 0

for (let i = 0; i < 5; i++) {
  stack.enQueue(i * 2);
}

console.log(stack.deQueue()); // 0
console.log(stack.getHead()); // 2
console.log(stack.deQueue()); // 2

stack.clear();
console.log(stack.deQueue()); // 0
console.log(stack.deQueue()); // 0

