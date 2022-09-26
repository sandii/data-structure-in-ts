/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 25, 2022
 *
 * Critical Path
 * - In workflows, there can be some Critical Pathes
 * - Which can decide total time cost of whole process
 * - Reducing Critical Pathes' time cost can shorten whole process
 *
 * How to represent workflow with Critical Path?
 * - Use arcs to present tasks in workflow
 * - Weight of arc is time of this task will consume
 * - Two vertexes of one arc present start & end moment of this task
 * - Every vertex has its earliest & latest time, which is crucial!
 *
 * What kind of tasks can be called Critical?
 * - Begin as early as possible and end as late as possible
 * - That is: earliest start time + time cost === latest end time
 * - So we need to know earliest & latest time of every vertex
 *
 * Earliest time:
 * - Use Topology Sort
 * - Vertex's earliest time is latest (longest distance) among all its in-pathes
 *
 * Latest time:
 * - Start from end vertexes which has same earlist & latest time
 * - Vertex's latest time is earliest (longest distance) among all its out-pathes
 *
 */

import AdjacencyList from './common/2.adjacency-list';

class MyAdjacencyList extends AdjacencyList {
  private queue: number[] = [];
  private removed: number[] = []; // stack
  private earliest: number[] = [];
  private latest: number[] = [];

  public criticalPath(): void {
    this.getEarliest();
    this.getLatest();
    this.printCriticalPath();
  }

  private getEarliest(): void {
    this.initEarliest();
    this.earlistMainLoop();
  }

  private initEarliest(): void {
    this.queue = [];
    this.removed = [];
    for (let i = 0; i < this.vertexNum; i++) {
      this.removeZeroInDegree(i);
    }

    this.earliest = [];
    for (let i = 0; i < this.vertexNum; i++) {
      this.earliest[i] = 0;
    }
  }

  private removeZeroInDegree(i: number): void {
    if (this.vertex[i].inDegree === 0) {
      this.queue.push(i);
      this.removed.push(i);
    }
  }

  private earlistMainLoop(): void {
    while (this.queue.length) {
      const i = this.queue.shift();
      let arc = this.vertex[i!]?.firstArc;
      while (arc) {
        const j = arc.adjacency;

        const endTime = this.earliest[i!] + arc.weight;
        if (endTime > this.earliest[j]) {
          this.earliest[j] = endTime;
        }

        this.vertex[j].inDegree--;
        this.removeZeroInDegree(j);

        arc = arc.next;
      }
    }
  }

  private getLatest(): void {
    this.initLatest();
    this.latestMainLoop();
  }

  private initLatest(): void {
    const latestTime = Math.max(...this.earliest);
    this.latest = [];
    for (let i = 0; i < this.vertexNum; i++) {
      this.latest[i] = latestTime;
    }
  }

  private latestMainLoop(): void {
    while (this.removed.length) {
      const i = this.removed.pop();
      let arc = this.vertex[i!].firstArc;
      while (arc) {
        const j = arc.adjacency;

        const startTime = this.latest[j] - arc.weight;
        if (startTime < this.latest[i!]) {
          this.latest[i!] = startTime;
        }

        arc = arc.next;
      }
    }
  }

  private printCriticalPath(): void {
    for (let i = 0; i < this.vertexNum; i++) {
      let arc = this.vertex[i].firstArc;
      while (arc) {
        const j = arc.adjacency;

        if (this.isCritical(i, j, arc.weight)) {
          console.log(`${i} - ${j}: ${arc.weight}`);
        }

        arc = arc.next;
      }
    }
  }

  private isCritical(
    i: number,
    j: number,
    weight: number,
  ): boolean {
    return this.earliest[i] + weight === this.latest[j];
  }
}

const list = new MyAdjacencyList(
  '0,1,2,3,4,5,6,7,8,9',
  '0-1-3,0-2-4,1-3-5,1-4-6,2-3-8,2-5-7,3-4-3,4-6-9,4-7-4,5-7-6,6-9-2,7-8-5,8-9-3',
);
list.criticalPath(); // 0-2 2-3 3-4 4-7 7-8 8-9
