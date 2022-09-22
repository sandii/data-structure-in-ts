/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 22, 2022
 *
 * Shortest Path
 * - Find shortest path from start vertex v0 to other vertexes
 *
 * Dijkstra
 * - Similar to BFS, evaluate vertexes layer by layer
 * - Every round find nearest vertex from v0, marking it as done
 * - Next round, add new batch from nearest last round
 * - Distance of new batch should plus previous round's result
 *
 * - From v0 to any vertexes, time complexity is n^2
 * - Then, from any to any, time complexity is n^3
 *
 */

import AdjacencyMatrix from './common/1.adjacency-matrix';

class ActiveVertex {
  public constructor(
    public data = '',
    public prev = 0,
    public cost = 0,
  ) {}

  public done = false;
}

class MyAdjacencyMatrix extends AdjacencyMatrix {
  public constructor(vStr: string, aStr: string) {
    super(vStr, aStr);
  }

  private visited: (ActiveVertex | null)[] = [];

  public printPath(j = this.vertex.length - 1): void {
    const path: ActiveVertex[] = [];
    let prev = j;
    while (prev) {
      const vertex = this.visited[prev];
      if (!vertex) return;

      path.push(vertex);
      prev = vertex.prev;
    }
    path.push(this.visited[0]!);
    path.reverse();
    console.log(path.map(vertex => vertex.data));
  }

  public dijkstra(): void {
    this.visited = Array(this.vertexNum).fill(null);
    this.visited[0] = new ActiveVertex();

    this.visitDijkstra(0);
  }

  private visitDijkstra(i: number): void {
    this.addNewBatch(i);
    const j = this.getNearestVertex();
    this.visited[j]!.done = true;
    this.visitDijkstra(j);
  }

  private addNewBatch(i: number): void {
    for (let j = 0; j < this.vertexNum; j++) {
      const weight = this.arc[i][j];
      if (this.visited[j]?.done) continue;
      if (weight === 0 || weight === Infinity) continue;

      const prevCost = this.visited[i]?.cost || 0;
      const currCost = prevCost + weight;
      const visitedCost = this.visited[j]?.cost || 0;
      if (currCost >= visitedCost) continue;

      this.visited[j] = new ActiveVertex(
        this.vertex[j],
        i,
        currCost,
      );
    }
  }

  private getNearestVertex(): number {
    let minCost = Infinity;
    let minIndex = 0;
    for (let j = 0; j < this.vertexNum; j++) {
      const vertex = this.visited[j];
      if (!vertex) continue;

      if (vertex.cost < minCost) {
        minCost = vertex.cost;
        minIndex = j;
      }
    }
    return minIndex;
  }
}

const matrix = new MyAdjacencyMatrix(
  '12345678',
  '0-1-1,0-2-5,1-0-1,1-2-3,1-3-7,1-4-5,2-0-5,2-1-3,2-4-1,2-5-7,3-1-7,3-4-2,3-6-3,4-1-5,4-2-1,4-3-2,4-5-3,4-6-6,4-7-9,5-2-7,5-4-3,5-7-5,6-3-3,6-4-6,6-7-2,6-8-7,7-4-9,7-5-5,7-6-2,7-8-4,8-6-7,8-7-4',
);
matrix.dijkstra();
matrix.printPath();
