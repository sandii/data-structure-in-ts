/*
 * Author: Chen Zhi <chenzhibupt@qq.com>
 * Date: Sep 3, 2022
 *
 * Link List
 *
 *
 *
 */

import { ElType } from '../type';

type Pointer = LinkListNode | null;

class LinkListNode {
  public constructor(
    public data: ElType,
    public next: Pointer = null,
  ) {}
}

class LinkList {
  public head: Pointer = null;
}
