/*
 * author: Chenzhi <chenzhibupt@qq.com>
 * date: Sep 6, 2022
 *
 * Sequence Stack
 * - Top is -1 when stack is empty
 */

import { ElType, Status } from '../type';

class SequenceStack {
  public constructor(private MAXSIZE = 20) {}

  private list: ElType[] = [];
  private top = -1;

  public isEmpty(): boolean {
    return this.top === -1;
  }

  public isFull(): boolean {
    return this.top === this.MAXSIZE - 1;
  }

  public push(n: ElType): Status {
    if (this.isFull()) return Status.FAIL;

    this.top++;
    this.list[this.top] = n;

    return Status.SUCCESS;
  }

  public pop(): ElType {
    if (this.isEmpty()) return 0;

    const el = this.list[this.top];
    this.top--;
    return el;
  }

  public getTop(): ElType {
    return this.isEmpty() ? 0 : this.list[this.top];
  }

  public getLen(): number {
    return this.top + 1;
  }

  public clear(): void {
    this.top = -1;
  }
}

const stack = new SequenceStack();

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
