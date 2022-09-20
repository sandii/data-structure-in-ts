/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 20, 2022
 *
 * Minimum Cost Spanning Tree
 *
 * - Connet all vertex with minimum cost
 *
 * I. Prim
 *  1. Start from 0
 *  2. Search for nearest neighbor among unconnected vertexes and connect it
 *  3. Repeat step 2 until all vertexes are connected
 *
 */

import AdjacencyMatrix from './1.adjacency-matrix';

class ConnectArc {
  public constructor(
    public i: number,
    public j: number,
    public weight: number,
  ) {}
}

class MyAdjacencyMatrix extends AdjacencyMatrix {
  private connected: number[] = [];
  private connectArc: ConnectArc[] = [];

  public constructor(vStr: string, aStr: string) {
    super(vStr, aStr);
  }

  public printConnectArc(): void {
    this.connectArc.forEach(item =>
      console.log(`${item.i} - ${item.j}: ${item.weight}`),
    );
  }

  public prim(): void {
    this.connected = [0];
    this.connectArc = [];

    for (let i = 0; i < this.vertexNum; i++) {
      if (this.connected.includes(i)) continue;

      let minCost = Infinity;
      let minCostVertex = -1;
      for (let j of this.connected) {
        const weight = this.arc[i][j];
        if (weight === 0 || weight === Infinity) continue;
        if (weight < minCost) {
          minCost = weight;
          minCostVertex = j;
        }
      }

      if (minCost < Infinity) {
        this.connected.push(minCostVertex);
        this.connectArc.push(
          new ConnectArc(i, minCostVertex, minCost),
        );
      }
    }
  }
}

const matrix = new MyAdjacencyMatrix(
  '012345678',
  '0-1-10,0-5-11,1-0-10,1-2-18,1-6-16,1-8-12,2-1-18,2-3-22,2-8-8,3-2-22,3-4-20,3-6-24,3-7-16,3-8-21,4-3-20,4-5-26,4-7-7,5-0-11,5-4-26,5-6-17,6-1-16,6-3-24,6-5-17,6-7-19,7-3-16,7-4-7,7-6-19,8-1-12,8-2-8,8-3-21',
);

matrix.prim();
matrix.printConnectArc();

