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
  public push(n: ElType): Status {}
  public pop(): ElType {}
}
