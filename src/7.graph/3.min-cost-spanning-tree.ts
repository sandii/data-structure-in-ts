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

class ConnectArc {
  public constructor(
    public i: number,
    public j: number,
    public weight: number,
  ) {}
}

class AdjacencyMatrix {
  protected vertex: string[] = [];
  protected arc: number[][] = [];
  protected vertexNum = 0;
  protected arcNum = 0;

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

    while (this.connected.length < this.vertexNum) {
      let minCost = Infinity;
      let from = -1;
      let to = -1;

      for (let i of this.connected) {
        for (let j = 0; j < this.vertexNum; j++) {
          if (this.connected.includes(j)) continue;
          const weight = this.arc[i][j];
          if (weight === 0 || weight === Infinity) continue;
          if (weight < minCost) {
            minCost = weight;
            from = i;
            to = j;
          }
        }
      }

      if (minCost < Infinity) {
        this.connected.push(to);
        this.connectArc.push(
          new ConnectArc(from, to, minCost),
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
