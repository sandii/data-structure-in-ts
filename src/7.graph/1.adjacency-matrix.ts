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
  private vertextNum = 0;
  private arcNum = 0;

  private visited: boolean[] = [];

  public constructor(vStr: string, aStr: string) {
    this.initVertext(vStr);
    this.initArc(aStr);
  }

  private initVertext(vStr: string): void {
    this.vertex = vStr.split('');
    this.vertextNum = vStr.length;
  }

  private initArc(aStr: string): void {
    // init matrix
    for (let i = 0; i < this.vertextNum; i++) {
      this.arc[i] = [];
      for (let j = 0; j < this.vertextNum; j++) {
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
    for (let i = 0; i < this.vertextNum; i++) {
      for (let j = 0; j < this.vertextNum; j++) {
        const weight = this.arc[i][j];
        if (weight === 0 || weight === Infinity) continue;
        console.log(`${i} -> ${j}: ${weight}`);
      }
    }
  }

  public traverseDFS(): void {
    // init visited array
    this.visited = Array(this.vertextNum).fill(false);

    for (let i = 0; i < this.vertextNum; i++) {
      if (this.visited[i]) continue;

      // if graph is all connected
      // it will be only called once
      this.visitDFS(i);
    }
  }

  private visitDFS(i: number): void {
    this.visited[i] = true;
    console.log(this.vertex[i]);
    for (let j = 0; j < this.vertextNum; j++) {
      const weight = this.arc[i][j];
      if (weight === 0 || weight === Infinity) continue;
      if (this.visited[j]) continue
      this.visitDFS(j);
    }
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
