/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 13, 2022
 *
 * Adjacency Matrix
 *
 * - Using an array to store vertexes
 * - Using an matrix to store arcs
 *
 */

type Vertex = string;

class AdjacencyMatrix {
  private vertex: Vertex[] = [];
  private arc: number[][] = [];
  private vertexNum = 0;
  private arcNum = 0;
  private queue: number[] = []; // for BFS

  private visited: boolean[] = [];

  public constructor(vStr: string, aStr: string) {
    this.initVertext(vStr);
    this.initArc(aStr);
  }

  private initVertext(vStr: string): void {
    this.vertex = vStr.split('');
    this.vertexNum = vStr.length;
  }

  private initArc(aStr: string): void {
    // init matrix
    for (let i = 0; i < this.vertexNum; i++) {
      this.arc[i] = [];
      for (let j = 0; j < this.vertexNum; j++) {
        this.arc[i][j] = i === j ? 0 : Infinity;
      }
    }

    const arcs = aStr.split(',');
    this.arcNum = arcs.length;

    arcs.forEach(subStr => {
      const [i, j, weight] = subStr.split('-');
      this.arc[Number(i)][Number(j)] = Number(weight);
    });
  }

  public printVertext(): void {
    console.log(this.vertex);
  }

  public printArc(): void {
    for (let i = 0; i < this.vertexNum; i++) {
      for (let j = 0; j < this.vertexNum; j++) {
        const weight = this.arc[i][j];
        if (weight === 0 || weight === Infinity) continue;
        console.log(`${i} -> ${j}: ${weight}`);
      }
    }
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
      const weight = this.arc[i][j];
      if (weight === 0 || weight === Infinity) continue;
      if (this.visited[j]) continue;
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

      // enqueue
      this.queue.push(j);
    }

    if (!this.queue.length) return;
    const j = this.queue.shift();
    this.visitBFS(j as number);
  }
}

const matrix = new AdjacencyMatrix(
  'abcde',
  '0-4-6,1-0-9,1-2-3,2-0-2,2-3-5,3-4-1',
);

console.log('Vertex:');
matrix.printVertext();
console.log('\n');

console.log('Arc:');
matrix.printArc();

console.log('DFS:');
matrix.traverseDFS(); // aebcd

const matrix2 = new AdjacencyMatrix(
  'ABCDEFGHI',
  '0-1-1,0-5-1,1-0-1,1-2-1,1-6-1,1-8-1,2-1-1,2-3-1,2-8-1,3-2-1,3-4-1,3-6-1,3-7-1,3-8-1,4-3-1,4-5-1,4-7-1,5-0-1,5-4-1,5-6-1,6-1-1,6-3-1,6-5-1,7-3-1,7-4-1,7-6-1,8-1-1,8-2-1,8-3-1',
);

console.log('Vertex:');
matrix2.printVertext();
console.log('\n');

console.log('Arc:');
matrix2.printArc();

console.log('DFS:');
matrix2.traverseDFS(); // ABCDEFGHI
