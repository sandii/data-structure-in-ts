/*
 * author: Chenzhi <chenzhibupt@qq.com>
 * date: Sep 8, 2022
 *
 * Sequence Queue
 * - Stack only needs a TOP pointer
 * - But queue needs 3 flags:
 *  1. HEAD points head cell
 *  2. TAIL points next free cell
 *  3. LENGTH tell queue is full or empty,
 *  because when queue is empty or full, HEAD and TAIL will both point to same cell
 */

import { ElType, Status } from '../type';

class SequenceQueue {
  private list: ElType[] = [];
  private head = 0;
  private tail = 0;
  public length = 0;

  public constructor(public MAXSIZE = 20) {}

  public enQueue(el: ElType): Status {
    if (this.length === this.MAXSIZE) return Status.FAIL;

    this.list[this.tail] = el;
    this.length++;

    if (this.tail < this.MAXSIZE - 1) {
      this.tail++;
    } else {
      this.tail = 0;
    }

    return Status.SUCCESS;
  }

  public deQueue(): ElType {
    if (this.length === 0) return 0;

    const el = this.list[this.head];
    this.length--;

    if (this.head < this.MAXSIZE - 1) {
      this.head++;
    } else {
      this.head = 0;
    }

    return el;
  }

  public getHead(): ElType {
    if (this.length === 0) return 0;

    return this.list[this.head];
  }

  public clear(): void {
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  }
}

const queue = new SequenceQueue();

for (let i = 0; i < 5; i++) {
  queue.enQueue(i);
}
console.log(queue.length); // 5
console.log(queue.getHead()); // 0
console.log(queue.deQueue()); // 0
console.log(queue.deQueue()); // 1
console.log(queue.length); // 3

queue.clear();
console.log(queue.length); // 0
console.log(queue.deQueue()); // 0

for (let i = 0; i < 5; i++) {
  queue.enQueue(i * 2);
}
console.log(queue.length); // 5
console.log(queue.deQueue()); // 0
console.log(queue.deQueue()); // 2
