/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 19, 2022
 *
 * Deep First Search
 * - Recursive going deeper, much like traversing a tree
 * - Need a visited[] array recording visited vertex
 *
 * Breadth First Search
 * - Visit vertex layer by layer
 * - Push next batch of vertexes into a queue waiting
 * - Everytime dequeue a vertex, push next batch
 * - Also need a visited[] array
 *
 */

import AdjacencyMatrix from './common/1.adjacency-matrix';

class MyAdjacencyMatrix extends AdjacencyMatrix {
  private queue: number[] = []; // for BFS
  private visited: boolean[] = []; // for BFS and DFS

  public constructor(vStr: string, aStr: string) {
    super(vStr, aStr);
  }

  public traverseDFS(): void {
    // init visited array
    this.visited = Array(this.vertexNum).fill(false);

    for (let i = 0; i < this.vertexNum; i++) {
      if (this.visited[i]) continue;

      // if graph is all connected
      // it will be only called once
      this.visitDFS(i);
    }
  }

  private visitDFS(i: number): void {
    this.visited[i] = true;
    console.log(this.vertex[i]);

    for (let j = 0; j < this.vertexNum; j++) {
      if (this.visited[j]) continue;

      const weight = this.arc[i][j];
      if (weight === 0 || weight === Infinity) continue;

      this.visitDFS(j);
    }
  }

  public traverseBFS(): void {
    // init visited array and queue
    this.visited = Array(this.vertexNum).fill(false);
    this.queue = [];

    for (let i = 0; i < this.vertexNum; i++) {
      if (this.visited[i]) continue;

      this.visitBFS(i);
    }
  }

  private visitBFS(i: number): void {
    this.visited[i] = true;
    console.log(this.vertex[i]);

    for (let j = 0; j < this.vertexNum; j++) {
      if (this.visited[j]) continue;

      const weight = this.arc[i][j];
      if (weight === 0 || weight === Infinity) continue;

      // enqueue
      this.queue.push(j);
      this.visited[j] = true;
    }

    if (!this.queue.length) return;
    const j = this.queue.shift();
    this.visitBFS(j as number);
  }
}

const matrix = new MyAdjacencyMatrix(
  'abcde',
  '0-4-6,1-0-9,1-2-3,2-0-2,2-3-5,3-4-1',
);

console.log('Vertex:');
matrix.printVertex();
console.log('\n');

console.log('Arc:');
matrix.printArc();
console.log('\n');

console.log('DFS:');
matrix.traverseDFS(); // aebcd
console.log('\n');

const matrix2 = new MyAdjacencyMatrix(
  'ABCDEFGHI',
  '0-1-1,0-5-1,1-0-1,1-2-1,1-6-1,1-8-1,2-1-1,2-3-1,2-8-1,3-2-1,3-4-1,3-6-1,3-7-1,3-8-1,4-3-1,4-5-1,4-7-1,5-0-1,5-4-1,5-6-1,6-1-1,6-3-1,6-5-1,7-3-1,7-4-1,7-6-1,8-1-1,8-2-1,8-3-1',
);

console.log('Vertex:');
matrix2.printVertex();
console.log('\n');

console.log('Arc:');
matrix2.printArc();
console.log('\n');

console.log('DFS:');
matrix2.traverseDFS(); // ABCDEFGHI
console.log('\n');

console.log('BFS:');
matrix2.traverseBFS(); // A BF CGIE DH
console.log('\n');
