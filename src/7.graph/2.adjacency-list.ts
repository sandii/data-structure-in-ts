/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 20, 2022
 *
 * Adjacency List
 *
 * - An array stores vertexes
 * - And every cell contains a link list which stores related arcs
 *
 * - [ADVANTAGE] Save space when graph is spare
 * - [SHORTAGE] Link list is not as convenient as array
 *
 */

class VertexNode {
  public constructor(public data: string = '') {}
  public firstArc: ArcNode | null = null;
}

class ArcNode {
  public adjacency: number = 0;
  public weight: number = 0;
  public next: ArcNode | null = null;
}

class AdjacencyList {
  private vertex: VertexNode[] = [];
  private vertexNum = 0;
  private arcNum = 0;

  private visited: boolean[] = [];
  private queue: number[] = [];

  public constructor(vStr: string, aStr: string) {
    this.initVertex(vStr);
    this.initArc(aStr);
  }

  private initVertex(vStr: string): void {
    this.vertexNum = vStr.length;
    this.vertex = vStr
      .split('')
      .map(s => new VertexNode(s));
  }

  private initArc(aStr: string): void {
    const arr = aStr.split(',');
    this.arcNum = arr.length;

    arr.forEach(str => {
      const [i, j, weight] = str.split('-');
      const vertexItem = this.vertex[Number(i)];
      if (!vertexItem) return;

      const arc = new ArcNode();
      arc.adjacency = Number(j);
      arc.weight = Number(weight);
      arc.next = vertexItem.firstArc;

      vertexItem.firstArc = arc;
    });
  }

  public printVertex(): void {
    console.log(this.vertex);
  }

  public printArc(): void {
    for (let i = 0; i < this.vertexNum; i++) {
      let next = this.vertex[i].firstArc;
      while (next) {
        const j = next.adjacency;
        console.log(
          `${this.vertex[i].data} -> ${this.vertex[j].data}: ${next.weight}`,
        );
        next = next.next;
      }
    }
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

      this.visitBFS(i);
    }
  }

  private visitBFS(i: number): void {
    this.visited[i] = true;

    console.log(this.vertex[i].data);

    let next = this.vertex[i].firstArc;
    while (next) {
      const j = next.adjacency;

      if (!this.visited[j]) {
        this.queue.push(j);
      }
      
      next = next.next;
    }

    if (!this.queue.length) return;
    const j = this.queue.shift();
    this.visitBFS(j as number);
  }
}

const list = new AdjacencyList(
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

const list2 = new AdjacencyList(
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
