/*
 * Author: Chen Zhi <chenzhibupt@qq.com>
 * Date: Sep 3, 2022
 *
 * Sequence List
 * - index from 0
 * - We implement our length prop, although JS array has its own length
 *
 */

import { ElType, Status } from '../type';

const MAXSIZE = 30;

class SequenceList {
  private list: ElType[] = [];
  private length: number = 0;

  public insert(el: ElType, index = 0): Status {
    if (index < 0 || this.length === MAXSIZE) {
      return Status.FAIL;
    }

    if (index > this.length) {
      index = this.length;
    }

    const left = this.list.slice(0, index);
    const right = this.list.slice(index);

    this.list = [...left, el, ...right];
    this.length++;

    return Status.SUCCESS;
  }

  private isValidIndex(index: number): boolean {
    return index >= 0 && index < this.length;
  }

  public remove(index: number): Status {
    if (!this.isValidIndex(index)) {
      return Status.FAIL;
    }

    this.list.splice(index, 1);
    this.length--;

    return Status.SUCCESS;
  }

  public update(index: number, el: ElType): Status {
    if (!this.isValidIndex(index)) {
      return Status.FAIL;
    }

    this.list.splice(index, 1, el);

    return Status.SUCCESS;
  }

  public getElem(index: number): ElType | null {
    return this.isValidIndex(index)
      ? this.list[index]
      : null;
  }

  public locateElem(el: ElType): number {
    return this.list.indexOf(el);
  }

  public getLength(): number {
    return this.length;
  }

  public clear(): void {
    this.list = [];
    this.length = 0;
  }

  public print() {
    console.log(this.list);
  }
}

const instance = new SequenceList();

for (let i = 0; i < 5; i++) {
  instance.insert(i * 2);
}
instance.print(); // 8 6 4 2 0

instance.remove(2);
instance.print(); // 8 6 2 0

instance.update(2, 100);
instance.print(); // 8 6 100 0

console.log(instance.getElem(0)); // 8

console.log(instance.locateElem(100)); // 2

console.log(instance.getLength()); // 4

instance.clear();
instance.print();
