/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 20, 2022
 *
 * Minimum Cost Spanning Tree
 * - Connet all vertex with minimum cost
 *
 * Kruscal: Thinking on arc
 *  1. Get all arcs and sort ascendently
 *  2. Keep including shortest arc in while AVOID MAKING UP LOOPS
 *
 * [KEY 1] How to avoid making up loops?
 * - All included vertex will make up one or more connected components
 * - Loops were made when 2 vertexes of a newly included arc sit on same connected components
 * - So, avoid making up loops equals to avoid including new arc which has 2 vertexes sitting on same connected components
 *
 * [KEY 2] How to tell whether 2 vertexes sit on same connected components?
 * - Convert a connected component to a tree
 * - All nodes on same tree can trace to same root
 * - So, we need to see whether 2 vertexes can trace to same root
 *
 * [KEY 3] How to convert connected component to tree
 * - Use a parent[] array
 * - If two node i and j connect to tree, set parent[i] = j or parent[j] = i
 * - Which means j or i is root of tree
 * - If parent[i] === m and parent[j] === n
 * - Which means i belongs to a tree with root m and j belongs to a tree with root n
 * - Set parent[m] = n or parent[n] = m, two trees become one
 *
 */

import AdjacencyMatrix from './common/1.adjacency-matrix';

class Edge {
  public constructor(
    public i: number,
    public j: number,
    public weight: number,
  ) {}
}

class MyAdjacencyMatrix extends AdjacencyMatrix {
  private connectedEdges: Edge[] = [];
  private allEdges: Edge[] = [];
  private parent: number[] = [];

  public constructor(vStr: string, aStr: string) {
    super(vStr, aStr);
  }

  public printConnectedEdges(): void {
    this.connectedEdges.forEach(item =>
      console.log(`${item.i} - ${item.j}: ${item.weight}`),
    );
  }

  public kruscal(): void {
    this.connectedEdges = [];
    this.parent = Array(this.vertexNum).fill(-1);
    this.getAllEdges();

    this.allEdges.forEach(edge => {
      const iRoot = this.getRoot(edge.i);
      const jRoot = this.getRoot(edge.j);

      if (iRoot === jRoot) {
        // two vertex on same tree, that will make up a loop
        return;
      }
      this.parent[iRoot] = jRoot; // connect two trees
      this.connectedEdges.push(edge);
    });
  }

  private getAllEdges(): void {
    this.allEdges = [];
    for (let i = 0; i < this.vertexNum; i++) {
      for (let j = 0; j < this.vertexNum; j++) {
        const weight = this.arc[i][j];
        if (weight === 0 || weight === Infinity) continue;

        const edge = new Edge(i, j, weight);
        this.allEdges.push(edge);
      }
    }
    this.allEdges.sort((a, b) => a.weight - b.weight);
  }

  private getRoot(i: number): number {
    let parent = i;
    while (this.parent[parent] !== -1) {
      parent = this.parent[parent];
    }
    return parent;
  }
}

const matrix = new MyAdjacencyMatrix(
  '012345678',
  '0-1-10,0-5-11,1-0-10,1-2-18,1-6-16,1-8-12,2-1-18,2-3-22,2-8-8,3-2-22,3-4-20,3-6-24,3-7-16,3-8-21,4-3-20,4-5-26,4-7-7,5-0-11,5-4-26,5-6-17,6-1-16,6-3-24,6-5-17,6-7-19,7-3-16,7-4-7,7-6-19,8-1-12,8-2-8,8-3-21',
);

matrix.kruscal();
matrix.printConnectedEdges();
