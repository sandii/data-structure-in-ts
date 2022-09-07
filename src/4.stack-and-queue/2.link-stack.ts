/*
 * author: Chenzhi <chenzhibupt@qq.com>
 * date: Sep 7, 2022
 *
 * Link Stack
 * - Always insert at head
 */

import { ElType } from '../type';

class StackNode {
  public data: ElType = 0;
  public next: StackNode | null = null;
}

class LinkStack {
  public top: StackNode | null = null;

  public push(el: ElType): void {
    const node = new StackNode();
    node.data = el;
    node.next = this.top;
    this.top = node;
  }

  public pop(): ElType {
    if (!this.top) return 0;

    const el = this.top.data;
    this.top = this.top.next;

    return el;
  }

  public clear(): void {
    this.top = null;
  }

  public getTop(): ElType {
    return this.top?.data || 0;
  }

  public getLen(): number {
    let length = 0;
    let pointer = this.top;
    while (pointer) {
      length++;
      pointer = pointer.next;
    }
    return length;
  }
}

const stack = new LinkStack();

for (let i = 0; i < 5; i++) {
  stack.push(i);
}
console.log(stack.getLen()); // 5
console.log(stack.getTop()); // 4
console.log(stack.pop()); // 4
stack.push(100);
console.log(stack.pop()); // 100
console.log(stack.pop()); // 3
console.log(stack.getLen()); // 3
stack.clear();
console.log(stack.getLen()); // 0
console.log(stack.pop()); // 0

