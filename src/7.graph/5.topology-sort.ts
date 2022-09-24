/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 24, 2022
 *
 * Topology Sort
 * - Use a graph to present workflow
 * - If graph has circular dependencies, work cannot be done
 * - To check whether graph has circular dependencies
 * - That is what Topology Sort can do
 *
 * Detail
 * - Keep removing 0-in-degree vertexes from graph
 * - If finally all vertexes can be removed
 * - Then graph has no circular dependencies
 * - Vice versa
 *
 */

import AdjacencyList from './common/2.adjacency-list';

class MyAdjacencyList extends AdjacencyList {
  private queue: number[] = [];
  public removed: number[] = [];

  public topologySort(): boolean {
    this.initQueue();
    this.mainLoop();
    return this.removed.length === this.vertexNum;
  }

  private initQueue(): void {
    this.queue = [];
    this.vertex.forEach((vertex, index) => {
      if (vertex.inDegree === 0) {
        this.queue.push(index);
        this.removed.push(index);
      }
    });
  }

  private mainLoop(): void {
    while (this.queue.length) {
      const i = this.queue.shift();
      let arc = this.vertex[i!].firstArc;
      while (arc) {
        const j = arc.adjacency;
        this.vertex[j].inDegree--;
        if (this.vertex[j].inDegree === 0) {
          this.queue.push(j);
          this.removed.push(j);
        }
        arc = arc.next;
      }
    }
  }
}

const list = new MyAdjacencyList(
  '0,1,2,3,4,5,6,7,8,9,10,11,12,13',
  '0-4-1,0-5-1,0-11-1,1-2-1,1-4-1,1-8-1,2-5-1,2-6-1,2-9-1,3-2-1,3-13-1,4-7-1,5-8-1,5-12-1,6-5-1,8-7-1,9-10-1,9-11-1,10-13-1,12-9-1',
);
console.log(list.topologySort()); // true
console.log(list.removed);
