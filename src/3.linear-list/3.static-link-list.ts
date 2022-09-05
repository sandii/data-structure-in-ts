/*
 * Author: Chen Zhi <chenzhibupt@qq.com>
 * Date: Sep 5, 2022
 *
 * Static Link List
 * - It is actually an array
 * - Every pointer is a number, indecating next cell's index
 * - With 2 special cells, array's actual max volume is MAXSIZE - 2
 *  - HEAD points to beginning of list, or TAIL if list is empty
 *  - TAIL points to next free cell, or itself if list is full
 * - Last cell of list always points to TAIL
 * - Index from 1
 *
 * - [ADVANTAGE] All spaces are allocated at very beginning
 * - There is no need to create and free memory frenquently
 */

import { ElType, Status } from '../type';

interface StaticLinkListNode {
  data: ElType;
  next: number;
}

const MAXSIZE = 20;

class StaticLinkList {
  private list: StaticLinkListNode[] = [];

  public constructor() {
    this.init();
  }

  public init(): void {
    this.list = [];

    for (let i = 0; i < MAXSIZE; i++) {
      this.list.push({
        data: 0,
        next: i + 1,
      });
    }
    this.list[0].next = MAXSIZE - 1;
    this.list[MAXSIZE - 1].next = 1;
  }

  private getPrevIndex(i: number): number {
    let prev = 0;
    for (let j = 0; j < i - 1; j++) {
      prev = this.list[prev].next;
    }
    return prev;
  }

  public getLength(): number {
    let len = 0;
    for (
      let curr = this.list[0].next;
      curr !== MAXSIZE - 1;
      curr = this.list[curr].next
    ) {
      len++;
    }
    return len;
  }

  private isValidIndex(i: number): boolean {
    if (i <= 0 || i > MAXSIZE - 2) return false; // physically beyond array
    if (i > this.getLength() + 1) return false; // logically beyond List
    return true;
  }

  public insert(el: ElType, i: number): Status {
    if (!this.isValidIndex(i)) return Status.FAIL;

    const prev = this.getPrevIndex(i);
    const curr = this.list[MAXSIZE - 1].next;

    this.list[MAXSIZE - 1].next = this.list[curr].next;
    this.list[curr].next = this.list[prev].next;
    this.list[prev].next = curr;

    this.list[curr].data = el;

    return Status.SUCCESS;
  }

  public remove(i: number): Status {
    if (!this.isValidIndex(i)) return Status.FAIL;

    const prev = this.getPrevIndex(i);
    const curr = this.list[prev].next;

    this.list[prev].next = this.list[curr].next;
    this.list[curr].next = this.list[MAXSIZE - 1].next;
    this.list[MAXSIZE - 1].next = curr;

    return Status.SUCCESS;
  }
  public getElem(i: number): ElType {
    if (!this.isValidIndex(i)) return 0;

    let curr = this.list[0].next;
    for (let j = 1; j < i; j++) {
      curr = this.list[curr].next;
    }
    return this.list[curr].data;
  }

  public locateElem(el: ElType): number {
    let i = 1;

    for (
      let curr = this.list[0].next;
      curr !== MAXSIZE - 1;
      curr = this.list[curr].next
    ) {
      if (this.list[curr].data === el) {
        return i;
      }
      i++;
    }

    return -1;
  }

  public traverse(): void {
    const arr: ElType[] = [];

    for (
      let curr = this.list[0].next;
      curr !== MAXSIZE - 1;
      curr = this.list[curr].next
    ) {
      arr.push(this.list[curr].data);
    }

    console.log(arr);
  }
}

const linkList = new StaticLinkList();

for (let i = 0; i < 5; i++) {
  linkList.insert(i, 1);
}
linkList.traverse(); // 4 3 2 1 0
linkList.init();

for (let i = 0; i < 5; i++) {
  linkList.insert(i * 2, i + 1);
}
linkList.traverse(); // 0 2 4 6 8

linkList.insert(100, 3);
linkList.traverse(); // 0 2 100 4 6 8

linkList.remove(4);
linkList.remove(2);
linkList.traverse(); // 0 100 6 8

console.log(linkList.getElem(3)); // 6
console.log(linkList.locateElem(3)); // -1
console.log(linkList.locateElem(6)); // 3
console.log(linkList.getLength()); // 4
