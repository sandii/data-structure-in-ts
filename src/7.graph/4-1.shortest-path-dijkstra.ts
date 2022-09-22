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

class MyAdjacencyMatrix extends AdjacencyMatrix {
  public constructor(vStr: string, aStr: string) {
    super(vStr, aStr);
  }

  private path: number[] = [];
  private costs: number[] = [];
  private done: boolean[] = [];

  public printPath(): void {}

  public dijkstra(): void {
    this.path = Array(this.vertexNum).fill(0);
    this.costs = Array(this.vertexNum).fill(Infinity);
    this.costs = [0];
    this.done = Array(this.vertexNum).fill(false);
    this.done[0] = true;

    for (let k = 0; k < this.vertexNum; k++) {
      let prev = 0;
      let minCost = Infinity;
      let next = 0;

      for (let j = 0; j < this.vertexNum; j++) {
        if (this.done[j]) continue;

        const weight = this.arc[prev][j];
        if (weight === 0) continue;

        const newCost = Math.min(this.costs[prev] + weight, this.costs[j]);

        if (weight < minCost) {
          minCost = weight;
          next = j;
        }
      }

      this.done[next] = true;
      // this.path.push(next);
    }
  }
}
