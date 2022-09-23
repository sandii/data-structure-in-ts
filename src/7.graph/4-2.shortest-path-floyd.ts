/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 23, 2022
 *
 * Shortest Path
 * - Find shortest path from start vertex v0 to other vertexes
 *
 * Floyd
 * - Use a matrix cost[i][j] recording cost from i to j (exactly same with arc[i][j])
 * - Use a loop outside trying to find a shortcut vertex: cost[i][shortcut] + cost[shortcut][j] < cost[i][j]
 * - Use a matrix path[i][j] recording shortcut vertex
 * - For example, path[i][j] = k means shortest path is i -> k -> j, then next step check path[k][j]
 *
 * [Strength] Simple and graceful
 * [Shortage] It always calculates every vertex to every vertex, time complexity is always n^3
 */

import AdjacencyMatrix from './common/1.adjacency-matrix';

class MyAdjacencyMatrix extends AdjacencyMatrix {
  private cost: number[][] = [];
  private path: number[][] = [];

  public printPath(): void {}

  public floyd(): void {
    this.initCost();
    this.initPath();
    this.mainLoop();
  }
  private initCost(): void {
    // copy
    for (let i = 0; i < this.vertexNum; i++) {
      for (let j = 0; j < this.vertexNum; j++) {
        this.cost[i][j] = this.arc[i][j];
      }
    }
  }

  private initPath(): void {
    for (let i = 0; i < this.vertexNum; i++) {
      for (let j = 0; j < this.vertexNum; j++) {
        this.path[i][j] = j;
      }
    }
  }

  private mainLoop(): void {
    for (let m = 0; m < this.vertexNum; m++) {
      for (let i = 0; i < this.vertexNum; i++) {
        for (let j = 0; j < this.vertexNum; j++) {
          const shortcut =
            this.cost[i][m] + this.cost[m][j];
          if (shortcut < this.cost[i][j]) {
            this.cost[i][j] = shortcut;
            this.path[i][j] = m;
          }
        }
      }
    }
  }
}

const matrix = new MyAdjacencyMatrix(
  '012345678',
  '0-1-1,0-2-5,1-0-1,1-2-3,1-3-7,1-4-5,2-0-5,2-1-3,2-4-1,2-5-7,3-1-7,3-4-2,3-6-3,4-1-5,4-2-1,4-3-2,4-5-3,4-6-6,4-7-9,5-2-7,5-4-3,5-7-5,6-3-3,6-4-6,6-7-2,6-8-7,7-4-9,7-5-5,7-6-2,7-8-4,8-6-7,8-7-4',
);
matrix.floyd();
matrix.printPath(); // 01243678
