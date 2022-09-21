/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 20, 2022
 *
 * Almost same with Adjacency matrix
 *
 */

import AdjacencyList from './common/2.adjacency-list';

class MyAdjacencyList extends AdjacencyList {
  private visited: boolean[] = [];
  private queue: number[] = [];

  public constructor(vStr: string, aStr: string) {
    super(vStr, aStr);
  }

  public traverseDFS(): void {
    this.visited = Array(this.vertexNum).fill(false);

    for (let i = 0; i < this.vertexNum; i++) {
      if (this.visited[i]) continue;

      this.visitDFS(i);
    }
  }

  private visitDFS(i: number): void {
    this.visited[i] = true;

    console.log(this.vertex[i].data);

    let next = this.vertex[i].firstArc;
    while (next) {
      const j = next.adjacency;

      if (!this.visited[j]) {
        this.visitDFS(j);
      }

      next = next.next;
    }
  }

  public traverseBFS(): void {
    this.visited = Array(this.vertexNum).fill(false);
    this.queue = [];

    for (let i = 0; i < this.vertexNum; i++) {
      if (this.visited[i]) continue;
      this.visited[i] = true;
      this.visitBFS(i);
    }
  }

  private visitBFS(i: number): void {
    console.log(this.vertex[i].data);

    let next = this.vertex[i].firstArc;
    while (next) {
      const j = next.adjacency;

      if (!this.visited[j]) {
        this.queue.push(j);
        this.visited[j] = true;
      }

      next = next.next;
    }

    if (!this.queue.length) return;
    const j = this.queue.shift();
    this.visitBFS(j as number);
  }
}

const list = new MyAdjacencyList(
  'abcde',
  '0-4-6,1-0-9,1-2-3,2-0-2,2-3-5,3-4-1',
);

console.log('Vertex:');
list.printVertex();
console.log('\n');

console.log('Arc:');
list.printArc();
console.log('\n');

console.log('DFS:');
list.traverseDFS(); // aebcd
console.log('\n');

const list2 = new MyAdjacencyList(
  'ABCDEFGHI',
  '0-1-1,0-5-1,1-0-1,1-2-1,1-6-1,1-8-1,2-1-1,2-3-1,2-8-1,3-2-1,3-4-1,3-6-1,3-7-1,3-8-1,4-3-1,4-5-1,4-7-1,5-0-1,5-4-1,5-6-1,6-1-1,6-3-1,6-5-1,7-3-1,7-4-1,7-6-1,8-1-1,8-2-1,8-3-1',
);

console.log('Vertex:');
list2.printVertex();
console.log('\n');

console.log('Arc:');
list2.printArc();
console.log('\n');

console.log('DFS:');
list2.traverseDFS(); // ABCDEFGHI
console.log('\n');

console.log('BFS:');
list2.traverseBFS(); // A BF CGIE DH
console.log('\n');
